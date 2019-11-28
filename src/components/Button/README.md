# PortalTech Button for Storybook

### API

| Property | Description                                                     | Type            | Default |
| -------- | --------------------------------------------------------------- | --------------- | ------- |
| ghost    | make background transparent and invert text and border colors   | boolean         | false   |
| htmlType | set the original html `type` of `button`                        | string          | button  |
| shape    | can be set to `round` or omitted                                | string          | default |
| size     | can be set to `small`, `large` or omitted                       | string          | default |
| type     | can be set to `primary`, `ghost`, `dashed`, `danger` or omitted | string          | default |
| onClick  | set the handler to handle `click` event                         | (event) => void | -       |

### Enums for Props

`htmlType`

- submit
- reset
- button (default)

`size`

- small
- large
- omit (default)

`shape`

- round
- omit (default)

`type`

- primary
- ghost
- dashed
- danger
- omit (default)

### Author

Yuriy S.
