---
rule: 7
title: Intimation of a personal data breach
summary: Two notifications, no materiality threshold, no risk filter. One misdirected email is a reportable breach.
live: '2027-05-13'
actSections: ['s.8(6)']
madeUnder: ['s.40(2)(f)']
penalty: '₹200 crore'
schedules: []
cluster: 5
verifiedAgainstGazette: false
lastReviewed: 2026-09-12
---

## What counts as a breach — s.2(u)

> "any unauthorised processing of personal data or accidental disclosure, acquisition, sharing, use, alteration, destruction or loss of access to personal data, that compromises the confidentiality, integrity or availability of personal data"

Note how wide. "Loss of access" means ransomware that encrypts your own data — with nothing stolen — is a breach. "Accidental disclosure" means one misdirected email is a breach.

## What it says

**Duty 1 — tell each affected person, Rule 7(1).** To the best of your knowledge, "in a concise, clear and plain manner and without delay", through her user account or a channel she registered:

- (a) what happened — nature, extent and timing
- (b) the consequences relevant to her
- (c) what you've done and are doing to reduce risk
- (d) what she should do to protect herself
- (e) contact details of someone who can answer her

**Duty 2 — tell the Board, twice, Rule 7(2).**

*Immediately, without delay:* nature, extent, timing, location, and likely impact.

*Within 72 hours* (extendable only if the Board agrees to a written request):

1. updated and detailed information
2. the broad facts — events, circumstances, reasons
3. mitigation measures taken or proposed
4. any findings about the person who caused the breach
5. remedial measures to prevent recurrence
6. a report on the intimations given to affected individuals

## Situation A — "One misdirected email"

A CloudDesk employee emails one customer's address and phone number to the wrong recipient. She recalls it, but it had been opened. The team agrees this is too trivial to report.

**Both notifications are required.** Rule 7 applies to "any personal data breach". There is no materiality threshold. None.

This is the biggest divergence from GDPR in the whole framework. GDPR Article 33 excuses reporting where a breach is unlikely to result in risk; Article 34 excuses telling individuals unless the risk is high. India has neither filter. Any team whose process was tuned to GDPR's risk test will systematically under-report.

## Situation B — the 72-hour clock

Tuesday, 14:00. CloudDesk confirms a misconfigured storage bucket left 40,000 customer records readable on the open internet for six days.

| When | What |
| --- | --- |
| Tue 14:00 | Clock starts. Awareness. |
| Tue, same day | Board notified of basic facts. Don't wait to finish investigating. |
| Tue, same day | All 40,000 told: what was exposed, the six-day window, what CloudDesk is doing, what they should do, who to contact |
| By Fri 14:00 | Detailed report to the Board — cause, who made the change, what's fixed, and how and when the 40,000 were told |

## What if we're still investigating on Wednesday?

The 72 hours applies **only to the detailed report**. The initial Board notification and the notifications to individuals are both "without delay" — immediately on awareness.

Waiting two days to tell customers while you investigate is already a breach of Rule 7(1).

## When exactly does "becoming aware" start?

Undefined. The clock starts on awareness, not certainty. Decide in writing what awareness means in your organisation and who declares it — because if this is ever examined, your internal ticket timestamps are the first thing anyone will read.

## Do we really have to name who caused it?

Item (iv) says "any findings regarding the person who caused the breach." If an employee misconfigured the bucket, that goes to the regulator within 72 hours — which sits awkwardly with your own disciplinary process, and may collide with a police investigation if the cause was criminal.

There is no carve-out. Report what you have actually found, label it preliminary, and do not speculate.

## What if we haven't finished notifying everyone by hour 72?

Item (vi) makes you tell the Board that. **The Rule makes your own compliance self-reporting.**

## What about CERT-In?

Still applies. The CERT-In Directions of 28 April 2022 require certain cyber incidents within six hours.

A serious incident may now need: CERT-In in 6 hours · the Board without delay · individuals without delay · the Board's detailed report in 72 hours · plus RBI, IRDAI or SEBI if you're regulated. **Build one runbook that fires all of them.**
