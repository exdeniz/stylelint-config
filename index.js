module.exports = {
  extends: ["stylelint-config-recommended", "stylelint-config-rational-order"],
  plugins: ["stylelint-a11y", "stylelint-order"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["import-glob", "reset-global"]
      }
    ],
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "comment-no-empty": true,
    "declaration-block-no-duplicate-properties": [
      true
      // {
      //   ignore: ["consecutive-duplicates-with-different-values"]
      // }
    ],
    "declaration-block-no-shorthand-property-overrides": true,
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "keyframe-declaration-no-important": true,
    "media-feature-name-no-unknown": true,
    "no-descending-specificity": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "property-no-unknown": [true, { ignoreProperties: ["/lost*/", "box", "size"] }],
    // "selector-pseudo-class-no-unknown": [
    //   true,
    //   {
    //     ignorePseudoClasses: ["focus-visible"]
    //   }
    // ],
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    "selector-nested-pattern": "^&",
    "string-no-newline": true,
    "unit-no-unknown": [
      true,
      {
        ignoreUnits: ["x"]
      }
    ],
    indentation: [
      2,
      {
        except: ["value"]
      }
    ],
    "order/order": ["custom-properties", "declarations", "rules", "at-rules"]
  }
}
