// Some patterns are different
const isGarment = design => ([
  'rendertest',
  'tutorial',
  'examples',
  'legend',
].indexOf(design) === -1)

/*
 * This runs unit tests for pattern drafting
 * It expects the following:
 *
 * @param string me: Name of the pattern (eg 'aaron')
 * @param object Pattern: pattern constructor
 *
 * @param object expect: Imported chai.expect
 * @param object models: Imported @freesewing/models
 * @param object patterns: Imported @freesewing/pattern-info
 */
const testPatternDrafting = (design, Pattern, expect, models, patterns, log=false) => {
  // Helper method to try/catch pattern drafting
  const doesItDraft = (pattern, log=false) => {
    try {
      pattern.draft()
      if (pattern.events.error.length < 1) return true
      if (log) console.log(pattern.events.error)
      return false
    } catch (err) {
      if (log) console.log(err)
      return false
    }
  }

  // Figure out whether this is a with(out)breasts pattern
  const breasts = patterns.withBreasts.indexOf(design) === -1 ? false : true

  const ourModels = models[breasts ? 'withBreasts' : 'withoutBreasts']
  const measurements = ourModels[breasts ? 'size34' : 'size42']

  /*
   * Draft pattern for different models
   */
  if (isGarment(design)) {
    it('Draft for human models:', () => true)

    for (let size in ourModels) {
      it(`  - Drafting for ${size} (${breasts ? 'with' : 'no'} breasts)`, () => {
        expect(
          doesItDraft(
            new Pattern({
              measurements: ourModels[size]
            }), log
          )
        ).to.equal(true)
      })
    }

    // Do the same for fantistical models (dolls, giants)
    it('Draft for non-human models:', () => true)

    const fractionModel = fraction => {
      const model = {}
      for (const [measie, value] of Object.entries(ourModels.size40)) {
        model[measie] = value * fraction
      }

      return model
    }
    const models = {
      // These are just names, don't read too much into it
      'Gnome (0.1)': fractionModel(0.1),
      'Halfling (0.2)': fractionModel(0.2),
      'Goblin (0.5)': fractionModel(0.5),
      'Dwarf (0.75)': fractionModel(0.75),
      'Elf (1.5)': fractionModel(1.5),
      'Ogre (2.5)': fractionModel(2.5),
      'Firbolg (5)': fractionModel(5),
    }
    for (let size in models) {
      it(`  - Drafting for ${size} (${breasts ? 'with' : 'no'} breasts)`, () => {
        expect(
          doesItDraft(
            new Pattern({
              measurements: models[size]
            }), log
          )
        ).to.equal(true)
      })
    }
  }


  /*
   * Draft parts individually
   */
  it('Draft parts individually:', () => true)
  let parts = isGarment(design)
    ? patterns.parts[design]
    : Pattern.config.parts
  for (let name of parts) {
    it(`  - ${name} should draft on its own`, () => {
      expect(
        doesItDraft(
          new Pattern({
            measurements,
            settings: {
              only: [name]
            }
          }), log
        )
      ).to.equal(true)
    })
  }

  /*
   * Draft a paperless non-detailed pattern
   */
  it('Draft paperless non-detailed pattern:', () => true)
  if (isGarment(design)) {
    for (const sa of [0,10]) {
      it(`  - Drafting paperless non-detailed pattern for size-40 (${breasts ? 'with' : 'no'} breasts) sa: ${sa}`, () => {
        expect(
          doesItDraft(
            new Pattern({
              measurements: ourModels.size40,
              complete: false,
              paperless: true,
              sa,
              settings: {
              complete: false,
              paperless: true,
              sa,
              }
            }), log
          )
        ).to.equal(true)
      })
    }
  }
}

module.exports = testPatternDrafting
