# 09 - Metrics, Analytics, and Data-Driven Decision Making

## 1. Defining Success Metrics

| Metric | Definition | Why It Matters | Example Target |
| --- | --- | --- | --- |
| **DAU/MAU** | Daily Active Users / Monthly Active Users — measures frequency of engagement | Indicator of "stickiness" and habitual use | DAU/MAU ≥ 20% |
| **Retention** | % of users who come back after first use over time (e.g., Day 1, Day 7, Day 30 retention) | Shows product's ability to deliver ongoing value | Day 7 retention ≥ 40% |
| **NPS** | Net Promoter Score — % Promoters (9–10) minus % Detractors (0–6) | Gauges overall customer satisfaction and loyalty | NPS ≥ +30 |

> Example:
> 
> 
> A mobile game team targets Day 1 retention of 50% and an NPS of +40 after the first tournament launch.
> 

![Performance](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWJ6Mno2bjBqdjlqb2psZnljY2doN2ZhNW8zaWNlaGhodGJnNTQ5dCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/CTBcE6ZXlDrt469j37/giphy.gif)

## 2. A/B Testing & Experimentation

1. **Hypothesis & Goal**
    - **Hypothesis:** "Changing the call-to-action button to green will increase click-through rate by 10%."
    - **Primary Metric:** Click-through rate (CTR).
2. **Design & Randomization**
    - Split users into **Control** (existing blue button) and **Variant** (green button) groups.
    - Ensure sample size is statistically powered.
3. **Run & Monitor**
    - Run test until you reach significance (e.g., p < 0.05) or a minimum sample size.
    - Monitor for anomalies or external events.
4. **Analyze & Decide**
    - Compare metric lift, confidence intervals, and secondary metrics (e.g., conversions).
    - **Outcome:** Roll out if positive lift; iterate or rollback if neutral/negative.

> Example:
> 
> 
> [Booking.com](http://booking.com/) ran >1,000 A/B tests per year. A simple button color test yielded a 0.5% lift in bookings (millions in incremental revenue).
> 

![AB Testing](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmw0YXJjZml5bWUyODBpbXVqa29weTZlMzY4MWgxZjFyaHA1Y2J3aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kM939eyFdZAIstgfp2/giphy.gif)


## 3. Data-Driven Decision Making with Analytics Tools

| Tool | Strengths | Use Case |
| --- | --- | --- |
| **PostHog** | Open-source, self-hosted, feature flags + analytics | Full control over data; developer-friendly |
| **Amplitude** | Powerful user-path and retention analysis | Deep cohort analysis and behavioral journeys |
| **Mixpanel** | Flexible event tracking + funnels | Custom event schemas and advanced segmentation |
| **Google Analytics** | Web traffic, acquisition channels, basic funnels | Marketing channel attribution and web analytics |

> Workflow Example:
> 
> 1. **Instrument Events** in Mixpanel (e.g., "Signup Completed").
> 2. **Visualize Funnels & Paths** in Amplitude to spot drop-off points.
> 3. **Run Feature Flags** via PostHog to roll out a new onboarding flow to 10% of users.
> 4. **Check GA** for any unexpected web traffic shifts post-launch.

![Dashboard](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHNheWZwZTlhdmtqeXN2NjB6d3FzbzQyMDI4ejczcW81ZXFhN3dlbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3orif97kZpzRgTdRCM/giphy.gif)


### Key Takeaways

- **Choose the right metrics** (engagement, retention, satisfaction) to reflect your product goals.
- **Experiment rigorously**—a clear hypothesis, proper randomization, and robust analysis are critical.
- **Leverage analytics platforms** to track, visualize, and act on user behavior in real time.