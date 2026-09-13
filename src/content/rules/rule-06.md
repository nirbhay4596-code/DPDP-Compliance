---
rule: 6
title: Reasonable security safeguards
summary: Seven minimum measures, no size threshold and no exemption anywhere in the Act. The highest penalty in the framework.
live: '2027-05-13'
actSections: ['s.8(4)', 's.8(5)']
madeUnder: ['s.40(1)', 's.40(2)(z)']
penalty: '₹250 crore'
schedules: []
cluster: 4
viresNote: >-
  Section 40(2) contains no clause authorising security minima, and s.8(5) has no "as may be
  prescribed" in it. So the ₹250 crore Rule rests on the general power in s.40(1) and the
  residual clause (z). Worth knowing; not a basis for non-compliance.
verifiedAgainstGazette: false
lastReviewed: 2026-09-12
---

## Why this Rule is different from every other

s.17(1) switches off most of the law in six situations — but its opening words are "except sub-sections (1) and (5) of section 8."

**Accountability and security survive every exemption in the Act.**

So while every other Rule has a "does this apply to me?" question, this one does not. It is the floor nobody gets under. Build here first.

## What it says

Safeguards "shall include, at the minimum" seven things:

| | Requirement |
| --- | --- |
| (a) | Protect the data — "such as securing of personal data through encryption, obfuscation, masking or the use of virtual tokens" |
| (b) | Control access to the computer resources used by you or your processor |
| (c) | Visibility — through appropriate logs, monitoring and review, to enable detection of unauthorised access, its investigation and remediation |
| (d) | Continuity if confidentiality, integrity or availability is compromised — "such as by way of data-backups" |
| (e) | Retain those logs **and the personal data** for one year, unless another law requires otherwise |
| (f) | Security provisions in your processor contracts |
| (g) | Technical and organisational measures to make the safeguards actually work |

Rule 6(2) takes "computer resource" from the Information Technology Act, 2000.

## Situation A — "We're too small for this"

Meera's nephew reads the seven measures and says a 40-person bakery surely doesn't need access logs and a year of retention.

He's wrong. There is **no size threshold, no risk-based scaling, and no small-business exemption** anywhere in these Rules.

| Rule | At Meera's Ovens |
| --- | --- |
| (a) | Encrypt the payroll spreadsheet; don't email it unprotected |
| (b) | Only Meera and Sunita can open the HR folder |
| (c) | Know who opened the staff file, and actually look |
| (d) | A tested backup of the payroll system |
| (e) | Retention set to 365 days |
| (f) | A security clause in the payroll bureau's contract |
| (g) | A named owner and a short written policy |

**But isn't there a startup exemption?** The Act permits one — s.17(3) even defines "startup" by DPIIT recognition. The Government has not used the power. Until it does, there is no relief.

## Situation B — "We have logs. Isn't that enough?"

Sunrise Hospitals logs every access to a patient record. The log file has never been opened. Retention is the cloud provider's default: 30 days.

Two failures.

**One** — clause (c) says logs, monitoring *and review*. A log nobody reads fails the rule. Sunrise sets an alert: if one account opens more than 50 records in an hour, the security lead is paged. Plus a documented monthly review.

**Two** — clause (e) needs 365 days, not 30.

Why is 30 days so common? It's the default on most cloud and SaaS logging tiers. This is usually **the single largest cost item in a DPDP programme**, and it is an infrastructure change, not a policy document. Cost it early.

And read (e) precisely: "such logs *and personal data*." Not just logs. This is a minimum retention duty hiding inside a security rule — see Rule 8 for the collision it creates.

## Situation C — "Our vendor was breached, not us"

Sunrise uses an outside transcription service for doctors' dictated notes. The transcription company is hacked. 8,000 patient notes exposed. Sunrise's IT head says: "Their breach, their problem."

It is **Sunrise's** breach. s.8(1) makes a fiduciary responsible "in respect of any processing undertaken by it or on its behalf by a Data Processor." Rule 6(1) repeats it.

Sunrise notifies the Board. Sunrise notifies all 8,000 patients. Sunrise's name goes on any penalty order.

## What about the contract — doesn't (f) protect us?

Clause (f) requires an "appropriate provision" for security in the processor contract. That makes the vendor liable **to you**. It does not shift your liability to the regulator.

Treat (f) as the floor, not the ceiling. Add real vendor assurance — questionnaires, evidence review, audit rights.

## What if the vendor takes 48 hours to tell us?

Then you have already failed Rule 7, which requires you to notify without delay. Most vendor agreements specify 48 or 72 hours. That is now too slow. Renegotiate to hours.

## Does encryption reduce our breach-reporting duty?

No. Under GDPR, encryption can excuse notifying individuals. There is no equivalent here. Encrypting under Rule 6(a) reduces the harm; it does not remove a single Rule 7 obligation.
