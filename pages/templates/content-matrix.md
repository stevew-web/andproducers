---
title: Content Matrix / Variables Sheet (DCO backbone)
permalink: /templates/content-matrix/

---

# Content Matrix / Variables Sheet: the backbone of versioning & DCO

If you’re producing lots of variants, you need a “truth table” that keeps you sane.

### What it is
A structured sheet that defines:
- which variants exist,
- what each variant says/shows,
- what rules apply,
- and what needs QA.

### Minimum columns (starter)
- **variant_id** (unique, stable)
- **audience / segment**
- **message_headline**
- **body_copy**
- **cta**
- **legal_line**
- **image_ref / video_ref**
- **language**
- **landing_url**
- **status** (draft / ready / approved)
- **qa_flags** (auto checks + manual notes)

### Rules that prevent disaster
- **IDs never change.** Update content, not IDs.
- **Validate lengths.** Use character count checks for truncation risk.
- **Lock approved rows.** Protect what’s signed off.

### QA flags (examples)
- Truncation risk
- Missing legal line
- URL not UTM-tagged
- CTA mismatch

### Next step
Use this alongside pricing/SLAs for versioning work: **/guides/pricing-models/**


