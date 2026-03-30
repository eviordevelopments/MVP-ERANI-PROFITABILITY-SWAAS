// src/lib/eraniInferenceEngine.ts

export interface ForensicInputs {
  challenge: 'leaks' | 'margins' | 'scope' | 'unknown'; // Respuestas directas del cuestionario UI
  accuracy: 40 | 65 | 85 | 95; // Respuestas directas del cuestionario UI (% de certeza operativa)
  monthlyRevenue: number;
  collaborators: number;
  contact?: {
    name: string;
    email: string;
    whatsapp: string;
  };
}

export const runEraniInference = (inputs: ForensicInputs) => {
  // Parámetros Fundamentales de la Gema Forense P(f)
  const HOURLY_SURVIVAL_RATE = 450; // Costo Cero (MXN)
  const AVG_HOURS_PER_MONTH = 160;
  
  // Transformadores Lexicales
  // Convertimos las etiquetas de frontend al modelo de datos del Engine
  const accuracyMap: Record<number, { friction: number, label: string }> = {
    40: { friction: 0.65, label: 'Ceguera Total' },
    65: { friction: 0.35, label: 'Fugas Constantes' },
    85: { friction: 0.15, label: 'Control Parcial' },
    95: { friction: 0.05, label: 'Alta Precisión' }
  };

  const challengeWeights: Record<string, number> = {
    'leaks': 1.25,
    'margins': 1.10,
    'scope': 1.40,
    'unknown': 1.15
  };

  // 1. Obtención de Fricción Baseline
  const selectedAccuracy = accuracyMap[inputs.accuracy] || accuracyMap[65]; // Fallback seguro
  const frictionWeight = challengeWeights[inputs.challenge] || 1.15;

  // 2. EFECTO HOLE-ALIGNMENT (Swiss Cheese Model)
  // Si coinciden "Descontrol en Scope Creep" (scope) y "Ceguera Total" (40%)
  const hasHoleAlignment = inputs.challenge === 'scope' && inputs.accuracy === 40;
  const theHoleAlignmentMultiplier = hasHoleAlignment ? 1.40 : 1.0; // 40% adicional de hemorragia.

  // 3. Cálculo de Hemorragia Mensual Estimada (Varianza Crítica)
  // Ecuación = (Colaboradores * Horas * Factor de Ceguera) * Margen de Fuga Base (20%)
  const estimatedLeakedHours = (inputs.collaborators * AVG_HOURS_PER_MONTH * selectedAccuracy.friction) * 0.20; 
  const rawHemorragia = estimatedLeakedHours * HOURLY_SURVIVAL_RATE * frictionWeight;
  const finalMonthlyHemorragia = rawHemorragia * theHoleAlignmentMultiplier;

  // 4. Mapeos Anuales
  const annualCOI = finalMonthlyHemorragia * 12;

  // 5. Punto de Conciencia de Rentabilidad [2]
  // La meta mínima que la empresa necesita para nivelarse después de absorber las ineficiencias y justificar el ticket del Peritaje
  const consciousnessPoint = inputs.monthlyRevenue + (finalMonthlyHemorragia * 1.5);

  return {
    hemorragiaMensual: finalMonthlyHemorragia,
    friccionOperativa: Math.round(selectedAccuracy.friction * 100),
    coiAnual: annualCOI,
    puntoConciencia: consciousnessPoint,
    visibilityLossLabel: selectedAccuracy.label,
    holeAlignmentTriggered: hasHoleAlignment, // Metadata valiosa en el dashboard
    contactInfo: inputs.contact
  };
};
