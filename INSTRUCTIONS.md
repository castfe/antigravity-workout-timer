# Instructions for AI Agents

## Primary Directive
When making **any** changes to this codebase, you **MUST** update the `README.md` to reflect those changes. This ensures the documentation stays synchronized with the actual implementation.

## Documentation Maintenance

### When to Update README.md
Update the README whenever you:
- Add, remove, or rename files
- Modify core functionality or logic
- Change the timer behavior or state management
- Add or remove features
- Update the UI/UX significantly
- Modify audio cue behavior
- Change configuration options
- Refactor major components

### What to Update in README.md
- **File Structure**: Add/remove files from the list
- **Key Features**: Document new features or remove deprecated ones
- **Agent Instructions**: Add warnings about new critical dependencies or patterns
- **Technology Stack**: Update if new libraries or frameworks are added
- **Usage**: Update steps if the user workflow changes

## Code Modification Guidelines

### Critical Patterns to Preserve
1. **State Object**: The `state` object in `script.js` is the single source of truth. Always update it before calling `updateDisplay()`.
2. **Audio Element IDs**: These are hardcoded references between `index.html` and `script.js`. Changing them requires updates in both files.
3. **Phase Transitions**: The timer logic depends on proper phase sequencing (IDLE → WORK → REST → WORK → ... → FINISHED). Don't break this flow.
4. **CSS Variables**: Use the existing CSS custom properties for theming. Don't hardcode colors.

### Testing After Changes
After making modifications:
1. Test the full workout cycle (multiple sets with work/rest intervals)
2. Verify audio cues play at correct transitions
3. Check that the UI updates correctly for each phase
4. Ensure the STOP button properly resets the state

## Best Practices
- **Keep it Simple**: This is a vanilla JS app. Avoid adding unnecessary dependencies.
- **Maintain Aesthetics**: The neon/dark theme is intentional. Keep visual changes consistent with this design language.
- **Document Edge Cases**: If you fix a bug or handle an edge case, add a comment in the code AND update the README if it affects usage.
- **Preserve User Experience**: The app is designed to minimize user interaction during workouts. Don't add features that require constant attention.

## File-Specific Notes

### `script.js`
- The 2-second delay in `handlePhaseEnd()` allows audio to finish playing. Don't remove this without testing audio transitions.
- `setInterval` is cleared and restarted on phase changes to prevent timer drift.

### `style.css`
- Phase-specific styles are applied via body classes (`phase-work`, `phase-rest`, `phase-finished`).
- The timer display uses `font-variant-numeric: tabular-nums` for consistent digit width.

### `index.html`
- Audio elements are preloaded but not autoplayed (browser restrictions).
- The form uses default values to provide a quick-start experience.

## Questions to Ask Yourself Before Committing
1. Did I update the README.md?
2. Does the state object remain consistent?
3. Are all audio cues still working?
4. Did I test a complete workout cycle?
5. Is the code still simple and maintainable?

---

**Remember**: A well-documented codebase is a maintainable codebase. Keep the README.md current!
