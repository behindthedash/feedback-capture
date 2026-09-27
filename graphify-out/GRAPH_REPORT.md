# Graph Report - refresh-code-graph  (2026-09-26)

## Corpus Check
- 51 files · ~25,587 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 386 nodes · 465 edges · 36 communities (34 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6a8c9317`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 13 edges
2. `_run()` - 11 edges
3. `Path` - 11 edges
4. `Functional Specification: CI Workflow (Typecheck + Test Gate)` - 10 edges
5. `main()` - 8 edges
6. `_commit_history()` - 8 edges
7. `Task List: CI Workflow (Typecheck + Test Gate)` - 8 edges
8. `3. Software Architecture` - 8 edges
9. `Any` - 7 edges
10. `canonicalize()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `safeResolveViewer()` --calls--> `ResolveViewer`  [EXTRACTED]
  src/route-handlers.ts → src/auth-types.ts

## Import Cycles
- None detected.

## Communities (36 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (19): CapabilityProbeResponse, ResolveViewer, ViewerResolution, CHANGE_KINDS, ChangeKind, FeedbackDeliveryErrorObserver, FeedbackDeliverySink, FeedbackPayload (+11 more)

### Community 1 - "Community 1"
Cohesion: 0.06
Nodes (30): Acceptance Criteria, Alternative Paths, Assumptions, Automated Test Execution, Business Context, Data Requirements, Dependency & Environment, Dependency Installation (+22 more)

### Community 2 - "Community 2"
Cohesion: 0.08
Nodes (24): dependencies, drizzle-orm, lucide-react, @medv/finder, modern-screenshot, description, exports, files (+16 more)

### Community 3 - "Community 3"
Cohesion: 0.08
Nodes (24): 1.1 Domains and Bounded Contexts, 1.2 Module Map, 1.3 Shared Kernel, 1.4 Context Map, 1. Logical Architecture, 2.2 Infrastructure Components, 2.5 Environments, 2. Infrastructure Architecture (+16 more)

### Community 4 - "Community 4"
Cohesion: 0.12
Nodes (17): devDependencies, jsdom, next, pg, react, react-dom, @testing-library/jest-dom, @testing-library/react (+9 more)

### Community 5 - "Community 5"
Cohesion: 0.12
Nodes (15): compilerOptions, allowJs, esModuleInterop, isolatedModules, jsx, lib, module, moduleResolution (+7 more)

### Community 6 - "Community 6"
Cohesion: 0.30
Nodes (14): Any, canon_bypass_actors(), canon_conditions(), canon_rule_params(), canon_rules(), canonicalize(), find_live_ruleset(), gh_api() (+6 more)

### Community 7 - "Community 7"
Cohesion: 0.35
Nodes (14): _commit_history(), _git(), base (adds lines) -> deletion-only commit -> addition commit; returns their SHAs, _run(), test_crash_before_scan_summary_fails_loudly(), test_deletion_only_range_passes_despite_zero_scanned(), test_empty_range_still_fails_when_range_given(), test_healthy_run_passes() (+6 more)

### Community 8 - "Community 8"
Cohesion: 0.13
Nodes (14): feedback-delivery-sink Specification, Requirements, Purpose, Requirement: Delivery does not change feedback lifecycle state, Requirement: Delivery follows successful persistence, Requirement: Hosts can configure a feedback delivery sink, Requirement: Sink failures do not reverse capture success, Scenario: Error observer fails (+6 more)

### Community 9 - "Community 9"
Cohesion: 0.14
Nodes (13): ADDED Requirements, Purpose, Requirement: Delivery does not change feedback lifecycle state, Requirement: Delivery follows successful persistence, Requirement: Hosts can configure a feedback delivery sink, Requirement: Sink failures do not reverse capture success, Scenario: Error observer fails, Scenario: Host configures an asynchronous sink (+5 more)

### Community 10 - "Community 10"
Cohesion: 0.14
Nodes (13): 1. Copy the schema and apply the migration, 2. Implement the auth adapter, 3. Wire the route-handler factory, 4. Optionally deliver newly captured feedback downstream, 5. Mount the widget, Development, feedback-capture, Install (+5 more)

### Community 11 - "Community 11"
Cohesion: 0.19
Nodes (8): closestHint(), describeElement(), FeedbackCapture(), FeedbackCaptureProps, isFormControl(), SelectedElement, snapshotText(), JsonResponse

### Community 12 - "Community 12"
Cohesion: 0.33
Nodes (10): _live_ruleset(), Unit tests for the vendored rulesets drift guard., The real .github/rulesets/ files parse and canonicalize cleanly., test_apply_creates_when_missing(), test_apply_puts_committed_json_when_drifted(), test_check_detects_missing_required_status_check(), test_check_passes_when_identical(), test_committed_rulesets_match_repo_rulesets_dir() (+2 more)

### Community 13 - "Community 13"
Cohesion: 0.20
Nodes (9): Context, Decisions, Goals / Non-Goals, Invoke after persistence and await the attempt before responding, Isolate sink failure from capture success and report it to the host, Migration Plan, Model delivery as an optional host port, Preserve privacy and lifecycle boundaries (+1 more)

### Community 14 - "Community 14"
Cohesion: 0.20
Nodes (9): bypass_actors, conditions, ref_name, enforcement, name, exclude, include, rules (+1 more)

### Community 15 - "Community 15"
Cohesion: 0.22
Nodes (8): Codebase Analysis Summary, Dependency Structure, Quality Gates Passed, Spec Size Status, Task Index, Task List: CI Workflow (Typecheck + Test Gate), Task Type Summary, Tasks

### Community 16 - "Community 16"
Cohesion: 0.22
Nodes (8): Business Invariants, Data Model: CI Workflow (Typecheck + Test Gate), Entities, Relationships, Scope Note, State Transitions (Status check), Status check, Validation run

### Community 17 - "Community 17"
Cohesion: 0.25
Nodes (7): metadata, analysis_sources, created_at, spec_id, updated_at, version, provides

### Community 18 - "Community 18"
Cohesion: 0.25
Nodes (7): Anti-Patterns to Avoid, Bounded Contexts, Conceptual Mapping, Domain Glossary, Enrichment Process, Project Ontology — Ubiquitous Language, Ubiquitous Language Rules

### Community 19 - "Community 19"
Cohesion: 0.25
Nodes (7): Acceptance Criteria, Definition of Done (DoD), Definition of Ready (DoR), Implementation Details (File names only, no code), TASK-001: Add PR-triggered CI workflow (typecheck + test gate), Technical Context (from Codebase Analysis), Test Instructions

### Community 20 - "Community 20"
Cohesion: 0.29
Nodes (6): Acceptance Criteria Matrix, Coverage Summary, Coverage Type Legend, Notes, Requirement (REQ-ID) Matrix, Traceability Matrix: CI Workflow (Typecheck + Test Gate)

### Community 21 - "Community 21"
Cohesion: 0.29
Nodes (6): Capabilities, Impact, Modified Capabilities, New Capabilities, What Changes, Why

### Community 22 - "Community 22"
Cohesion: 0.29
Nodes (6): Contract: Pull Request Trigger Event, Error / Edge Cases, Inputs (provided by GitHub, not user-supplied), Outputs / Emitted Effects, Trigger, Versioning / Compatibility Notes

### Community 23 - "Community 23"
Cohesion: 0.33
Nodes (5): Contract: Pull Request Status-Check Surface, Error Cases, Non-Requirements (explicit), Required Inputs (from the validation run), Success Response / Emitted State

### Community 24 - "Community 24"
Cohesion: 0.33
Nodes (5): Definition of Done (DoD), Evidence, Purpose, TASK-002: End-to-End Testing for CI Workflow (Typecheck + Test Gate), Test Instructions

### Community 25 - "Community 25"
Cohesion: 0.40
Nodes (4): Approaches considered (see decision-log.md DEC-001 for the formal record), Brainstorming Notes: CI Workflow (typecheck + test gate), Existing surface / brownfield reconciliation, Technical decisions discussed (deferred to a technical-plan / tasks, not the functional spec)

### Community 26 - "Community 26"
Cohesion: 0.40
Nodes (4): Commands, Cross-repo, Rulesets drift guard, When to run `--apply`

### Community 28 - "Community 28"
Cohesion: 0.40
Nodes (4): Definition of Done (DoD), Evidence, Must Perform, TASK-003: Code Cleanup & Workspace Hygiene for CI Workflow

### Community 29 - "Community 29"
Cohesion: 0.50
Nodes (3): DEC-001: Approach Selection, DEC-002: Coverage-Gate Stretch Item — Overriding the Input Brief, Decision Log: CI Workflow (typecheck + test gate)

### Community 30 - "Community 30"
Cohesion: 0.50
Nodes (3): 1. Public delivery contract, 2. Create-path integration, 3. Documentation and verification

### Community 31 - "Community 31"
Cohesion: 0.67
Nodes (3): _is_deletion_only_range(), main(), True when `range_spec` holds at least `min_commits` commits and none adds a line

## Knowledge Gaps
- **210 isolated node(s):** `name`, `target`, `enforcement`, `bypass_actors`, `include` (+205 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Community 4` to `Community 2`?**
  _High betweenness centrality (0.007) - this node is a cross-community bridge._
- **What connects `name`, `target`, `enforcement` to the rest of the system?**
  _215 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.10452961672473868 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Community 4` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._