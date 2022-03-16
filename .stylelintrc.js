

module.exports = {

  extends: [

    'stylelint-config-sass-guidelines',

    'stylelint-config-idiomatic-order',

  ],

  plugins: [

    'stylelint-scss',

  ],

  rules: {

    'number-leading-zero': null,

    'declaration-property-value-blacklist': null,

    'no-invalid-double-slash-comments': null,

    'shorthand-property-no-redundant-values': true,

    indentation: 4,

    'selector-class-pattern': '^[a-z_-]+$',

    'max-nesting-depth': 4,

    'selector-no-qualifying-type': null,

    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-_]+[a-z0-9]+)?$',

    'scss/dollar-variable-colon-space-before': null,

    'scss/selector-no-redundant-nesting-selector': null,

    'scss/at-mixin-pattern': '^[a-z0-9-_]+?$',

    'scss/at-extend-no-missing-placeholder': null,

    'order/properties-alphabetical-order': null,

    'order/order': [

      [

        'custom-properties',

        'dollar-variables',

        {

          type: 'at-rule',

          name: 'extend',

        },

        {

          type: 'at-rule',

          name: 'include',

          hasBlock: false,

        },

        'declarations',

        'rules',

      ],

    ],

    

  },

};
