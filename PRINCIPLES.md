# Engineering Principles — Remarq

These 15 principles govern every decision in this codebase — planning, implementation, and review. They are not suggestions. Violating them will get your PR rejected by the Council.

**1. Delete first, then simplify, then accelerate, then automate.**
Before writing a line of code: can this requirement be deleted? Can it be solved with less? If you're not surprised by how little you needed, you wrote too much.

**2. Question the requirement before touching code.**
The most dangerous requirements are the ones no one questions. Who asked for this, why, and what's the actual goal? The wrong problem solved perfectly is still failure.

**3. Make it work. Make it right. In that order.**
Red-green-refactor. Write the failing test first, make it pass by any means, then refactor. No clever code on the first pass. Never skip the refactor step.

**4. Simple design beats clever design.**
Priority order: (1) passes tests, (2) reveals intent, (3) no duplication, (4) minimal elements. When in doubt, delete the abstraction.

**5. Tests are a thinking tool, not a deliverable.**
Write tests to discover the design, not to prove it. Coverage is a lagging indicator. A test suite that doesn't make you more confident changing the code isn't working.

**6. Refactoring is not optional.**
Before adding a feature: make the change easy, then make the easy change. Code that can't be changed safely is a liability. "We'll clean it up later" is a lie.

**7. Always be shipping.**
An imperfect thing shipped beats a perfect thing in review. "Enough" is a legitimate engineering decision. Cut scope before cutting quality.

**8. API stability is a feature.**
Once an endpoint is public, breaking it has real cost to consumers. Prefer additive changes. Mark things deprecated before removing them. API consumers shouldn't need to read changelogs to stay unbroken.

**9. The right thing should be the easy thing.**
Design so the happy path is obvious and the wrong path takes effort. If you need caveats to explain how to use an endpoint correctly, the design is wrong.

**10. Truth-seeking over face-saving.**
Code review is not a social event. Candor is required; praise is not. The goal is truth, not comfort. Come with reasoning; change your position when you see better reasoning.

**11. Getting to right beats being right.**
The goal is the best global outcome — not for any reviewer to win. Contradictory feedback is a signal to dig deeper, not pick a side. The deciding voice finds the truth that resolves the contradiction.

**12. Do it right the first time.**
Shortcuts that aren't named become permanent. If you're cutting a corner, name it, comment it, file it. Quick hacks that ship without acknowledgment become the next system's foundation.

**13. No estimates — timeboxes instead.**
Estimates are harmful. Scope to what can be done well in the time available. If a feature can't be done well, cut or defer it.

**14. Just-in-time over just-in-case.**
Don't build for the future requirement that hasn't arrived. Patterns should emerge from working code, not be imposed upfront. Premature abstraction is YAGNI with extra steps.

**15. Slow is smooth. Smooth is fast.**
Controlled execution beats full throttle. The pressure to ship fast is often what creates the slowdown. Understand the problem fully before writing a line.
