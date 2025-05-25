# 07 - Agile Methodologies and Product Development

## 1. Scrum vs. Kanban vs. Scrumban  

| Framework   | Cadence & Structure                                                      | When to Use                                  | Example Scenario                           |
|-------------|---------------------------------------------------------------------------|-----------------------------------------------|--------------------------------------------|
| **Scrum**   | Timeboxed sprints (1–4 weeks), fixed scope per sprint, defined roles (PO, Scrum Master, Dev Team) | When you need predictable cadence & planning  | Launching a major feature every quarter    |
| **Kanban**  | Continuous flow, work‐in‐progress (WIP) limits, pull-based planning       | When work is variable or support-heavy        | Handling customer support tickets & bugs   |
| **Scrumban**| Hybrid: timeboxes + WIP limits + pull-based replenishment                  | When you need sprint rhythm + flow flexibility | Early‐stage product with frequent changes  |

> **Example:**  
> A mobile app team uses **Scrum** for feature releases, **Kanban** for bug fixes and urgent patches, and transitions to **Scrumban** as they scale to balance new work with maintenance.

![Agile GIF](https://media.giphy.com/media/l1J9JzBB9r3hUe4k4/giphy.gif)


## 2. Writing Effective User Stories & Acceptance Criteria  

### User Story Structure  

```
As a \[user role],
I want \[goal/desire],
so that \[benefit/value].
```


| Element       | Tip                                                       | Example                                                   |
|---------------|-----------------------------------------------------------|-----------------------------------------------------------|
| **Role**      | Specify persona or stakeholder                             | As a **Premium Subscriber**                              |
| **Goal**      | Focus on one action or outcome                             | I want **to download playlists for offline listening**   |
| **Benefit**   | Tie to measurable value                                    | so that **I can listen without using data**              |

### Acceptance Criteria (AC)  
- **Given-When-Then** format ensures clear, testable conditions.
```

Given \[context],
When \[action],
Then \[expected result].

```
- **Tips:**  
- 3–5 criteria per story.  
- Include edge cases (errors, limits).  
- Avoid technical implementation details.

> **Example Story & AC:**  
> **Story:**  
> As a **Project Manager**, I want **to assign priority labels to backlog items**, so that **stakeholders can quickly see what to work on next**.  
> **Acceptance Criteria:**  
> 1. Given a backlog item, when I click “Set Priority,” then I can choose from High/Medium/Low.  
> 2. Given I set a priority, when I view the backlog list, then items display with colored priority tags.  
> 3. Given no priority is set, when I hover over an item, then I see “Priority: Unassigned.”

![User Story GIF](https://media.giphy.com/media/3ohhwIQO3ZbELHpR5W/giphy.gif)

## 3. Backlog Grooming & Sprint Planning  

### Backlog Grooming (Refinement)  
1. **Review & Estimate:** Ensure stories have story points or T-shirt sizing.  
2. **Clarify Details:** Confirm acceptance criteria, dependencies, and scope.  
3. **Prioritize:** Re-order based on value, risk, and effort.  
4. **Split Large Stories:** Break epics into smaller, sprint‐sized pieces.

> **Cadence:** At least once per sprint (~60 mins).

### Sprint Planning  
1. **Capacity Check:** Calculate team availability (velocity × sprint length).  
2. **Select Stories:** From top of groomed backlog until capacity is reached.  
3. **Define Sprint Goal:** A concise statement of what the sprint will achieve.  
4. **Task Breakdown:** Teams decompose stories into tasks (design, dev, test).  
5. **Confirm Commitment:** Team agrees they can deliver.

> **Example Sprint Goal:**  
> “Enable users to filter transaction history by date range.”

![Sprint Planning GIF](https://media.giphy.com/media/26tOY0MEzNazE4I4U/giphy.gif)


### Key Takeaways  
- **Choose the agile framework** that matches your team’s workflow and variability.  
- **Well-written stories & acceptance criteria** make development & QA faster and clearer.  
- **Regular grooming & precise sprint planning** keep your backlog healthy and your sprints focused.