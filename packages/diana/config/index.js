import { version } from '../package.json'

export default {
  name: 'diana',
  version,
  design: 'Alfalyr',
  code: 'Alfalyr',
  department: 'womenswear',
  type: 'pattern',
  difficulty: 2,
  tags: ['top', 'basics'],
  optionGroups: {
    fit: [
      'chestEase',
      'bicepsEase',
      'shoulderEase',
      'waistEase',
      'hipsEase',
      'lengthBonus',
      'sleeveLengthBonus'
    ],
    style: ['drapeAngle', 'shoulderSeamLength'],
    advanced: [
      'acrossBackFactor',
      'armholeDepthFactor',
      'frontArmholeDeeper',
      'shoulderSlopeReduction',
      'sleeveWidthGuarantee',
      {
        sleevecap: [
          'sleevecapEase',
          'sleevecapTopFactorX',
          'sleevecapTopFactorY',
          'sleevecapBackFactorX',
          'sleevecapBackFactorY',
          'sleevecapFrontFactorX',
          'sleevecapFrontFactorY',
          'sleevecapQ1Offset',
          'sleevecapQ2Offset',
          'sleevecapQ3Offset',
          'sleevecapQ4Offset',
          'sleevecapQ1Spread1',
          'sleevecapQ1Spread2',
          'sleevecapQ2Spread1',
          'sleevecapQ2Spread2',
          'sleevecapQ3Spread1',
          'sleevecapQ3Spread2',
          'sleevecapQ4Spread1',
          'sleevecapQ4Spread2'
        ]
      }
    ]
  },
  measurements: [
    'bicepsCircumference',
    'chestCircumference',
    'hpsToHipsBack',
    'hipsCircumference',
    'naturalWaist',
    'naturalWaistToHip',
    'neckCircumference',
    'shoulderSlope',
    'shoulderToShoulder',
    'shoulderToWrist',
    'wristCircumference'
  ],
  dependencies: {
    frontBase: 'base',
    backBase: 'base',
    front: 'frontBase',
    back: 'backBase',
    sleeve: ['sleeveBase', 'front', 'back']
  },
  inject: {
    frontBase: 'base',
    backBase: 'base',
    front: 'frontBase',
    back: 'backBase',
    sleeve: 'sleeveBase'
  },
  hide: ['base', 'frontBase', 'backBase', 'sleeveBase'],
  options: {
    // Constants
    collarFactor: 5,
    brianFitSleeve: true,
    brianFitCollar: true,
    collarEase: 0,
    backNeckCutout: 0.05,

    // Angles
    drapeAngle: { deg: 20, min: 10, max: 30 },

    // Percentages
    acrossBackFactor: { pct: 97, min: 93, max: 100 },
    cuffEase: { pct: 20, min: 0, max: 30 },
    lengthBonus: { pct: 0, min: 0, max: 50 },
    sleeveLengthBonus: { pct: 0, min: -40, max: 10 },
    shoulderSeamLength: { pct: 35, min: 0.1, max: 60 },

    armholeDepthFactor: { pct: 55, min: 50, max: 70 },

    frontArmholeDeeper: { pct: 0, min: 0, max: 1.5 },

    shoulderEase: { pct: 0, min: -2, max: 6 },
    waistEase: { pct: 0, min: -10, max: 20 },
    hipsEase: { pct: 0, min: -10, max: 20 },
    chestEase: { pct: 0, min: -10, max: 20 },
    bicepsEase: { pct: 0, min: -5, max: 50 },

    shoulderSlopeReduction: { pct: 0, min: 0, max: 8 },
    sleevecapEase: { pct: 0, min: 0, max: 10 },
    sleevecapTopFactorX: { pct: 50, min: 25, max: 75 },
    sleevecapTopFactorY: { pct: 100, min: 35, max: 165 },
    sleevecapBackFactorX: { pct: 60, min: 35, max: 65 },
    sleevecapBackFactorY: { pct: 33, min: 30, max: 65 },
    sleevecapFrontFactorX: { pct: 55, min: 35, max: 65 },
    sleevecapFrontFactorY: { pct: 33, min: 30, max: 65 },
    sleevecapQ1Offset: { pct: 3, min: 0, max: 7 },
    sleevecapQ2Offset: { pct: 5.5, min: 0, max: 7 },
    sleevecapQ3Offset: { pct: 4.5, min: 0, max: 7 },
    sleevecapQ4Offset: { pct: 1, min: 0, max: 7 },
    sleevecapQ1Spread1: { pct: 6, min: 4, max: 20 },
    sleevecapQ1Spread2: { pct: 15, min: 4, max: 20 },
    sleevecapQ2Spread1: { pct: 15, min: 4, max: 20 },
    sleevecapQ2Spread2: { pct: 10, min: 4, max: 20 },
    sleevecapQ3Spread1: { pct: 10, min: 4, max: 20 },
    sleevecapQ3Spread2: { pct: 8, min: 4, max: 20 },
    sleevecapQ4Spread1: { pct: 7, min: 4, max: 20 },
    sleevecapQ4Spread2: { pct: 7, min: 4, max: 20 },
    sleeveWidthGuarantee: { pct: 90, min: 25, max: 100 },
    waistEase: { pct: 0, min: -4, max: 20 }
  }
}
