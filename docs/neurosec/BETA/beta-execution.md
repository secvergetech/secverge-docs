---
title: NeuroSEC BETA Execution
sidebar_label: BETA Execution
sidebar_position: 2
slug: /neurosec/beta/execution
description: Execution tracker for NeuroSEC internal, trusted, closed and expanded BETA testing.
---

# NeuroSEC BETA Execution

**Product:** NeuroSEC  
**Program:** BETA  
**Track:** BETA Execution  
**Version:** 1.0  
**Overall Status:** 🟡 INTERNAL VALIDATION  
**Last Updated:** 20 August 2026

---

## Purpose

This document tracks NeuroSEC BETA execution from internal validation through controlled external testing and Release Candidate readiness.

...

# NeuroSEC BETA Execution Tracker v1.0

**Product:** NeuroSEC
**Company:** SECVerge Technologies
**Program:** NeuroSEC BETA
**Track:** BETA Execution
**Document Type:** Living Execution Tracker
**Version:** 1.0
**Overall Status:** 🟡 INTERNAL VALIDATION PREPARATION
**Primary Objective:** Safely introduce NeuroSEC to increasingly realistic users and environments, measure real-world performance, identify defects and usability problems, and determine whether NeuroSEC is ready to progress toward Release Candidate and General Availability.

---

# 1. Execution Principle

NeuroSEC BETA will not begin as an unrestricted public release.

Execution will progress through controlled waves:

**Wave 0 — SECVerge/Internal Validation**

→

**Wave 1 — Trusted BETA Users**

→

**Wave 2 — Controlled Closed BETA**

→

**Wave 3 — Expanded BETA**

→

**Release Candidate**

→

**GA Readiness**

Progression is based on product evidence and quality metrics rather than calendar dates.

---

# 2. Status Definitions

| Status             | Meaning                                 |
| ------------------ | --------------------------------------- |
| ⬜ NOT STARTED      | Activity has not started                |
| 🟡 IN PROGRESS     | Activity underway                       |
| 🟠 ACTION REQUIRED | Finding requires correction             |
| 🔵 MONITORING      | Activity operational and being observed |
| 🟣 BLOCKED         | Dependency prevents continuation        |
| 🟢 COMPLETE        | Activity completed successfully         |
| ⚪ NOT APPLICABLE   | Does not apply                          |

---

# 3. Execution Summary

| BETA Stage             | Objective                                 | Current Status | Exit Approved |
| ---------------------- | ----------------------------------------- | -------------- | ------------- |
| Wave 0 — Internal      | Validate product locally before outsiders | 🟡 IN PROGRESS | NO            |
| Readiness Gate         | External BETA approval                    | ⬜ NOT STARTED  | NO            |
| Wave 1 — Trusted Users | Small controlled real-user test           | ⬜ NOT STARTED  | NO            |
| Wave 2 — Closed BETA   | Wider environment diversity               | ⬜ NOT STARTED  | NO            |
| Wave 3 — Expanded BETA | Scale and product confidence              | ⬜ NOT STARTED  | NO            |
| Release Candidate      | Production candidate validation           | ⬜ NOT STARTED  | NO            |
| GA Readiness           | Commercial/production gate                | ⬜ NOT STARTED  | NO            |

---

# 4. TRACK A — Wave 0 Internal / Founder Validation

| ID     | Action Item                                       | Expected Output         | Owner    | Status        | Findings / Notes |
| ------ | ------------------------------------------------- | ----------------------- | -------- | ------------- | ---------------- |
| NE-001 | Install latest Windows package locally            | Working installation    | SECVerge | ⬜ NOT STARTED |                  |
| NE-002 | Install latest macOS package locally              | Working installation    | SECVerge | ⬜ NOT STARTED |                  |
| NE-003 | Complete normal user journey                      | Workflow validated      | SECVerge | ⬜ NOT STARTED |                  |
| NE-004 | Use NeuroSEC during normal daily activity         | Real-world observations | SECVerge | ⬜ NOT STARTED |                  |
| NE-005 | Validate repeated tunnel sessions                 | Stability observations  | SECVerge | ⬜ NOT STARTED |                  |
| NE-006 | Run long-duration active tunnel session           | Long-run evidence       | SECVerge | ⬜ NOT STARTED |                  |
| NE-007 | Compare portal status with actual endpoint status | Accuracy record         | SECVerge | ⬜ NOT STARTED |                  |
| NE-008 | Validate UI against approved design               | Acceptance record       | SECVerge | ⬜ NOT STARTED |                  |
| NE-009 | Capture all defects encountered                   | Issue register          | SECVerge | ⬜ NOT STARTED |                  |
| NE-010 | Capture usability friction                        | UX findings             | SECVerge | ⬜ NOT STARTED |                  |
| NE-011 | Capture documentation gaps                        | Documentation backlog   | SECVerge | ⬜ NOT STARTED |                  |
| NE-012 | Capture readiness-framework gaps                  | Beta Learning Register  | SECVerge | ⬜ NOT STARTED |                  |

---

# 5. TRACK B — Issue Classification

Every BETA finding should be classified consistently.

| Classification  | Meaning                                                          |
| --------------- | ---------------------------------------------------------------- |
| BLOCKER         | Product cannot reasonably continue BETA                          |
| CRITICAL        | Security, protection, data integrity or severe reliability issue |
| HIGH            | Major functionality impaired                                     |
| MEDIUM          | Feature works but has meaningful issue                           |
| LOW             | Minor defect or cosmetic issue                                   |
| UX              | Usability/design problem                                         |
| DOC             | Documentation gap                                                |
| COMPATIBILITY   | Environment/OS/application conflict                              |
| PERFORMANCE     | CPU/RAM/network/latency problem                                  |
| READINESS GAP   | Requirement missing from the original BETA Readiness framework   |
| FEATURE REQUEST | New capability requested by users                                |

---

# 6. Issue Register

| Issue ID | Date | Wave | OS | Build | Severity | Category | Description | Reproducible | Status | Fix Build | Retest |
| -------- | ---- | ---- | -- | ----- | -------- | -------- | ----------- | ------------ | ------ | --------- | ------ |
| NB-001   |      |      |    |       |          |          |             |              | ⬜      |           |        |

Additional rows should be added continuously.

---

# 7. BETA Learning Register

This is separate from the bug register.

It captures lessons that should improve future SECVerge BETA programs.

| Learning ID | Related Issue | Lesson | Readiness Standard Missing? | NeuroSEC Tracker Updated? | SECVerge Master Standard Updated? | Status |
| ----------- | ------------- | ------ | --------------------------- | ------------------------- | --------------------------------- | ------ |
| NL-001      |               |        |                             |                           |                                   | ⬜      |

Example:

**Issue:** Portal remained green after endpoint tunnel stopped.

**Product Fix:** Correct stale status handling.

**Readiness Lesson:** Portal truthfulness under endpoint failure must always be tested.

**Framework Change:** Add mandatory “actual state vs displayed protection state” test to all applicable SECVerge products.

---

# 8. TRACK C — External BETA Preparation

| ID     | Action Item                           | Expected Output        | Owner         | Status        | Notes |
| ------ | ------------------------------------- | ---------------------- | ------------- | ------------- | ----- |
| NE-020 | Confirm Readiness Go/No-Go approval   | Signed approval        | SECVerge      | ⬜ NOT STARTED |       |
| NE-021 | Select approved external BETA build   | Build ID               | Engineering   | ⬜ NOT STARTED |       |
| NE-022 | Prepare Windows distribution package  | BETA package           | Engineering   | ⬜ NOT STARTED |       |
| NE-023 | Prepare macOS distribution package    | BETA package           | Engineering   | ⬜ NOT STARTED |       |
| NE-024 | Record checksums                      | Release record         | Engineering   | ⬜ NOT STARTED |       |
| NE-025 | Publish Release Notes                 | docs.secverge.com      | Documentation | ⬜ NOT STARTED |       |
| NE-026 | Publish Known Limitations             | docs.secverge.com      | Documentation | ⬜ NOT STARTED |       |
| NE-027 | Publish installation guides           | docs.secverge.com      | Documentation | ⬜ NOT STARTED |       |
| NE-028 | Publish troubleshooting guide         | docs.secverge.com      | Documentation | ⬜ NOT STARTED |       |
| NE-029 | Activate issue reporting channel      | Working process        | SECVerge      | ⬜ NOT STARTED |       |
| NE-030 | Activate feedback mechanism           | Working process        | SECVerge      | ⬜ NOT STARTED |       |
| NE-031 | Prepare BETA invitation communication | Approved communication | SECVerge      | ⬜ NOT STARTED |       |
| NE-032 | Prepare BETA onboarding instructions  | Onboarding guide       | Documentation | ⬜ NOT STARTED |       |

---

# 9. TRACK D — Wave 1 Trusted BETA Users

**Recommended Initial Size:** Approximately 5–10 carefully selected users.

The purpose is not scale.

The purpose is to expose NeuroSEC to different real-world machines, networks and usage behaviours while maintaining close communication with participants.

| ID     | Action Item                                | Expected Output        | Owner       | Status        | Notes |
| ------ | ------------------------------------------ | ---------------------- | ----------- | ------------- | ----- |
| NE-040 | Identify trusted BETA candidates           | Candidate list         | SECVerge    | ⬜ NOT STARTED |       |
| NE-041 | Select mix of Windows/macOS users          | Balanced cohort        | SECVerge    | ⬜ NOT STARTED |       |
| NE-042 | Record operating-system versions           | Environment matrix     | SECVerge    | ⬜ NOT STARTED |       |
| NE-043 | Record basic network environment           | Environment matrix     | SECVerge    | ⬜ NOT STARTED |       |
| NE-044 | Send BETA participation terms              | Accepted terms         | SECVerge    | ⬜ NOT STARTED |       |
| NE-045 | Send installation/onboarding instructions  | User onboarding        | SECVerge    | ⬜ NOT STARTED |       |
| NE-046 | Confirm successful installation            | Installation metric    | SECVerge    | ⬜ NOT STARTED |       |
| NE-047 | Confirm first successful protected session | Activation metric      | SECVerge    | ⬜ NOT STARTED |       |
| NE-048 | Monitor first-use issues                   | Issue record           | SECVerge    | ⬜ NOT STARTED |       |
| NE-049 | Collect initial usability feedback         | Feedback               | SECVerge    | ⬜ NOT STARTED |       |
| NE-050 | Collect portal accuracy feedback           | Validation feedback    | SECVerge    | ⬜ NOT STARTED |       |
| NE-051 | Collect performance feedback               | Validation feedback    | SECVerge    | ⬜ NOT STARTED |       |
| NE-052 | Collect compatibility problems             | Compatibility register | SECVerge    | ⬜ NOT STARTED |       |
| NE-053 | Review issues daily during initial period  | Triage record          | SECVerge    | ⬜ NOT STARTED |       |
| NE-054 | Deliver required corrective builds         | Updated build          | Engineering | ⬜ NOT STARTED |       |
| NE-055 | Retest resolved P0/P1 findings             | Closure evidence       | QA          | ⬜ NOT STARTED |       |

---

# 10. Wave 1 Exit Gate

| Requirement                           |                    Target | Status |
| ------------------------------------- | ------------------------: | ------ |
| P0 open defects                       |                         0 | ⬜      |
| Critical security findings            |                         0 | ⬜      |
| Successful installer rate             |          Target to define | ⬜      |
| Successful first tunnel rate          |          Target to define | ⬜      |
| Unexpected tunnel failures            | Within approved threshold | ⬜      |
| Portal incorrect-protection incidents |              0 unresolved | ⬜      |
| Severe performance issues             |              0 unresolved | ⬜      |
| Major compatibility blockers          |              0 unresolved | ⬜      |
| User documentation adequate           |                       YES | ⬜      |
| Support process working               |                       YES | ⬜      |
| Wave 2 approval                       |                       YES | ⬜      |

---

# 11. TRACK E — Wave 2 Controlled Closed BETA

**Recommended Size:** Approximately 15–30 users after Wave 1 demonstrates sufficient stability.

| ID     | Action Item                                       | Expected Output          | Owner       | Status        | Notes |
| ------ | ------------------------------------------------- | ------------------------ | ----------- | ------------- | ----- |
| NE-060 | Expand tester cohort                              | Larger controlled cohort | SECVerge    | ⬜ NOT STARTED |       |
| NE-061 | Increase OS/environment diversity                 | Coverage matrix          | SECVerge    | ⬜ NOT STARTED |       |
| NE-062 | Increase network diversity                        | Coverage matrix          | SECVerge    | ⬜ NOT STARTED |       |
| NE-063 | Track successful installations                    | KPI                      | SECVerge    | ⬜ NOT STARTED |       |
| NE-064 | Track active users                                | KPI                      | SECVerge    | ⬜ NOT STARTED |       |
| NE-065 | Track successful protection sessions              | KPI                      | SECVerge    | ⬜ NOT STARTED |       |
| NE-066 | Track unexpected disconnects                      | KPI                      | SECVerge    | ⬜ NOT STARTED |       |
| NE-067 | Track crash/service failure rate                  | KPI                      | Engineering | ⬜ NOT STARTED |       |
| NE-068 | Track portal-data inaccuracies                    | KPI                      | QA          | ⬜ NOT STARTED |       |
| NE-069 | Track support requests                            | KPI                      | SECVerge    | ⬜ NOT STARTED |       |
| NE-070 | Track installation-related support requests       | KPI                      | SECVerge    | ⬜ NOT STARTED |       |
| NE-071 | Track uninstall/reinstall issues                  | KPI                      | QA          | ⬜ NOT STARTED |       |
| NE-072 | Review requested features separately from defects | Product backlog          | Product     | ⬜ NOT STARTED |       |
| NE-073 | Produce Wave 2 findings summary                   | BETA report              | SECVerge    | ⬜ NOT STARTED |       |

---

# 12. TRACK F — BETA Build Management

| ID     | Action Item                                          | Expected Output         | Owner         | Status        | Notes |
| ------ | ---------------------------------------------------- | ----------------------- | ------------- | ------------- | ----- |
| NE-080 | Maintain BETA build register                         | Build history           | Engineering   | ⬜ NOT STARTED |       |
| NE-081 | Associate every issue with affected build            | Traceability            | Engineering   | ⬜ NOT STARTED |       |
| NE-082 | Associate every fix with release build               | Traceability            | Engineering   | ⬜ NOT STARTED |       |
| NE-083 | Retest critical fixes before distribution            | Evidence                | QA            | ⬜ NOT STARTED |       |
| NE-084 | Publish release notes for each external build        | Documentation           | Documentation | ⬜ NOT STARTED |       |
| NE-085 | Publish new known limitations when applicable        | Documentation           | Documentation | ⬜ NOT STARTED |       |
| NE-086 | Remove obsolete BETA builds from active distribution | Controlled distribution | Engineering   | ⬜ NOT STARTED |       |
| NE-087 | Maintain emergency replacement process               | Operational process     | Engineering   | ⬜ NOT STARTED |       |

---

# 13. BETA Build Register

| Build | Platform | Release Date | User Group | Major Changes | Known Issues | Status |
| ----- | -------- | ------------ | ---------- | ------------- | ------------ | ------ |
| TBD   | Windows  |              | Internal   |               |              |        |
| TBD   | macOS    |              | Internal   |               |              |        |

---

# 14. TRACK G — BETA Metrics

Metrics should evolve as the product matures.

| Metric                     | Wave 0 | Wave 1 | Wave 2 | Wave 3 | Target |
| -------------------------- | -----: | -----: | -----: | -----: | ------ |
| Users Invited              |        |        |        |        |        |
| Users Activated            |        |        |        |        |        |
| Successful Installations   |        |        |        |        |        |
| Installation Problems      |        |        |        |        |        |
| Successful Tunnel Sessions |        |        |        |        |        |
| Unexpected Disconnects     |        |        |        |        |        |
| Endpoint Crashes           |        |        |        |        |        |
| Service Failures           |        |        |        |        |        |
| Portal Accuracy Issues     |        |        |        |        |        |
| Critical Security Issues   |        |        |        |        | 0      |
| Open P0 Issues             |        |        |        |        | 0      |
| Open P1 Issues             |        |        |        |        |        |
| Support Requests           |        |        |        |        |        |
| Documentation Issues       |        |        |        |        |        |
| Compatibility Issues       |        |        |        |        |        |
| User Satisfaction          |        |        |        |        |        |

---

# 15. TRACK H — User Feedback

| Feedback ID | Tester | Platform | Build | Type | Feedback | Priority | Decision | Status |
| ----------- | ------ | -------- | ----- | ---- | -------- | -------- | -------- | ------ |
| NF-001      |        |          |       |      |          |          |          |        |

Feedback should be separated into:

**Bug**

**Usability**

**Performance**

**Compatibility**

**Documentation**

**Security concern**

**Feature request**

**General feedback**

This prevents feature requests from being mixed with BETA-blocking defects.

---

# 16. TRACK I — BETA Communication

| ID     | Action Item                          | Expected Output | Owner    | Status        |
| ------ | ------------------------------------ | --------------- | -------- | ------------- |
| NE-100 | Create welcome communication         | Template        | SECVerge | ⬜ NOT STARTED |
| NE-101 | Create installation communication    | Template        | SECVerge | ⬜ NOT STARTED |
| NE-102 | Create new-build notification        | Template        | SECVerge | ⬜ NOT STARTED |
| NE-103 | Create critical issue notification   | Template        | SECVerge | ⬜ NOT STARTED |
| NE-104 | Create known-issue advisory          | Template        | SECVerge | ⬜ NOT STARTED |
| NE-105 | Create feedback reminder             | Template        | SECVerge | ⬜ NOT STARTED |
| NE-106 | Create BETA completion communication | Template        | SECVerge | ⬜ NOT STARTED |

---

# 17. TRACK J — Wave 3 Expanded BETA

Wave 3 should begin only after NeuroSEC demonstrates strong stability during controlled BETA.

| ID     | Action Item                               | Expected Output      | Owner       | Status        |
| ------ | ----------------------------------------- | -------------------- | ----------- | ------------- |
| NE-110 | Approve Wave 3 expansion                  | Go/No-Go             | SECVerge    | ⬜ NOT STARTED |
| NE-111 | Define larger tester target               | Approved cohort      | SECVerge    | ⬜ NOT STARTED |
| NE-112 | Expand supported environment testing      | Coverage             | QA          | ⬜ NOT STARTED |
| NE-113 | Validate backend capacity                 | Capacity evidence    | Engineering | ⬜ NOT STARTED |
| NE-114 | Validate monitoring under increased usage | Operational evidence | Engineering | ⬜ NOT STARTED |
| NE-115 | Monitor incident/support workload         | Operational metric   | SECVerge    | ⬜ NOT STARTED |
| NE-116 | Monitor product stability                 | KPI                  | Engineering | ⬜ NOT STARTED |
| NE-117 | Conduct BETA security review              | Security sign-off    | Security    | ⬜ NOT STARTED |
| NE-118 | Conduct BETA product review               | Product sign-off     | Product     | ⬜ NOT STARTED |

---

# 18. Release Candidate Entry Gate

Before NeuroSEC moves from BETA to Release Candidate:

| Requirement                                            | Status |
| ------------------------------------------------------ | ------ |
| No unresolved P0 defects                               | ⬜      |
| No unresolved critical security defects                | ⬜      |
| Core tunnel consistently stable                        | ⬜      |
| Portal state accurately represents real endpoint state | ⬜      |
| Supported Windows environments validated               | ⬜      |
| Supported macOS environments validated                 | ⬜      |
| Installer and upgrade process stable                   | ⬜      |
| Uninstall process stable                               | ⬜      |
| Performance within approved baseline                   | ⬜      |
| Documentation substantially complete                   | ⬜      |
| BETA support load manageable                           | ⬜      |
| Known limitations accepted                             | ⬜      |
| BETA learning review completed                         | ⬜      |
| SECVerge RC approval completed                         | ⬜      |

---

# 19. Release Candidate Validation

| ID     | Action Item                                | Expected Output     | Owner         | Status        |
| ------ | ------------------------------------------ | ------------------- | ------------- | ------------- |
| NE-120 | Freeze RC feature scope                    | RC scope            | Product       | ⬜ NOT STARTED |
| NE-121 | Build RC Windows package                   | RC build            | Engineering   | ⬜ NOT STARTED |
| NE-122 | Build RC macOS package                     | RC build            | Engineering   | ⬜ NOT STARTED |
| NE-123 | Run complete regression suite              | Test evidence       | QA            | ⬜ NOT STARTED |
| NE-124 | Run security regression                    | Security evidence   | Security      | ⬜ NOT STARTED |
| NE-125 | Run installer/upgrade/uninstall regression | Evidence            | QA            | ⬜ NOT STARTED |
| NE-126 | Run portal accuracy regression             | Evidence            | QA            | ⬜ NOT STARTED |
| NE-127 | Complete documentation review              | Final documentation | Documentation | ⬜ NOT STARTED |
| NE-128 | Validate RC with selected BETA users       | User evidence       | SECVerge      | ⬜ NOT STARTED |
| NE-129 | Produce RC assessment report               | Decision document   | SECVerge      | ⬜ NOT STARTED |

---

# 20. Transition to GA Readiness

BETA completion does **not** automatically mean General Availability.

Following successful BETA and Release Candidate validation, NeuroSEC should move into a separate:

# NEUROSEC GA READINESS

Typical GA subjects will include:

Commercial production capacity, production monitoring, formal support, SLAs where applicable, backup/recovery, disaster recovery, operational ownership, security sign-off, licensing, production distribution, final legal/privacy documentation, production release management, incident response, customer onboarding, commercial support and long-term maintenance.

These are deliberately separated from initial BETA Execution.

---

# 21. Current NeuroSEC BETA Execution Status

| Field                 | Current Value                   |
| --------------------- | ------------------------------- |
| Current Stage         | Wave 0 — Internal Preparation   |
| External BETA Started | NO                              |
| Windows Package       | Available — Validation Required |
| macOS Package         | Available — Validation Required |
| Internal Testing      | Preparing                       |
| Trusted BETA Users    | Not Yet Invited                 |
| Closed BETA           | Not Started                     |
| Expanded BETA         | Not Started                     |
| Release Candidate     | Not Started                     |
| Overall Status        | 🟡 IN PROGRESS                  |

---

# 22. Continuous Improvement Rule

At the end of every major BETA finding:

**Find Issue → Fix Product → Retest → Determine Root Cause → Determine Whether Readiness Should Have Detected It → Update NeuroSEC Readiness → Update SECVerge BETA Standard**

This loop is mandatory.

NeuroSEC therefore becomes the first practical implementation of the evolving SECVerge BETA governance framework rather than an isolated product test.
