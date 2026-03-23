# AGENTS.md: ERANI Intelligence Ecosystem

This document defines the specialized agents and governance rules for the ERANI platform.

## 1. Forensic Analysis Agents

### **Agent: Data Inquisitor (DI-1)**
- **Role**: Metadata Extraction and Extraction Validation.
- **Skills**:
    - `metadata_parsing`: Ability to digest Slack/Jira/ClickUp export files.
    - `anomaly_detection`: Identifying gaps between contract hours and activity metadata.
- **Rules**:
    - Never request manual input from the user's team.
    - Zero-Knowledge extraction (Ignore content, focus on frequency and timing).

### **Agent: Invariance Engine (IE-2)**
- **Role**: Level 2 Inference & Triangulation.
- **Skills**:
    - Pattern Matching: Crossing activity timestamps with contract milestones.
    - Dark Data Identification: Tagging unregistered billable events.
- **Rules**:
    - Cross-reference at least three distinct data points before flagging a "leak".

### **Agent: Profitability Sentinel (PS-3)**
- **Role**: Reporting and ROI Projection.
- **Skills**:
    - Bento Generation: Visualizing leaks in high-impact grid formats.
    - Financial Forecasting: Calculating 21-day ROI recovery.
- **Rules**:
    - Must highlight the "Dark Data Index" as the primary KPI.

## 2. Orchestration Pattern

ERANI uses a **Sequential Pipeline**:
1. **DI-1** extracts and cleans.
2. **IE-2** triangulates and identifies leaks.
3. **PS-3** generates the Forensic Report ($2,950 MXN value).

## 3. Aesthetic Governance (UX/UI Agent)
- **Constraint**: Industrial, Financial, Secure.
- **Palette**: #0A192F (Deep Sea), #1F2937 (Graphite), #10B981 (Emerald).
- **Directives**: Use glassmorphism for all cards. Transitions must feel "Bank-grade future".
