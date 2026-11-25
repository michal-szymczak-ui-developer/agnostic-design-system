# agnostic-design-system

Goal: a person describes a component. AI generates Figma and code. A person checks quality and consistency.
Source of truth: tokens (primitive, then semantic). Derive them from a few reference designs.

## System prompts

These rules apply to each system prompt, agent instruction, and rules file in this repository.

- Write in ASD-STE100 (Simplified Technical English). Reason: unambiguous words and short sentences reduce misinterpretation.
- Keep each prompt extremely concise. Use one sentence for each rule. Do not add introductions or repeats. Reason: a short prompt leaves more context for the task.
- Give a reason for each rule. Use the format `rule. Reason: why.` Remove a rule that has no reason. Reason: a model applies a rule more accurately when it knows the purpose.
- Use one word for one meaning. Reason: a changed word can look like a changed rule.
- Use the active voice and the imperative for commands. Reason: the reader sees at once who does what.
- Limit sentences to 20 words (25 in procedures). Put one idea in each sentence. Reason: the model can run each rule without guessing.
