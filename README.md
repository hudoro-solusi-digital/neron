## Instalation

Using npm:

```bash
$ npm i @hudoro/neron
```

Using yarn:

```bash
$ yarn add @hudoro/neron
```

## Basic Usage

```jsx
import { Avatar } from "neron";

export default function App() {
  return (
    <Avatar
      src="https://i.pinimg.com/originals/56/4a/2b/564a2b415569179ae577e79e4f9cb666.jpg"
      size="m"
    />
  );
}
```

## API

### Avatar

| Parameter | Usage             | Type                                            | Example                                                                            |
| --------- | ----------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| src       | Adding Image URL  | string (required)                               | src="https://i.pinimg.com/originals/56/4a/2b/564a2b415569179ae577e79e4f9cb666.jpg" |
| size      | Adding Image Size | "s" \| "xs" \| "m" \| "l" \| "xl" (default="m") | size="m"                                                                           |

### Button

| Parameter | Usage                 | Type                                           | Example                       |
| --------- | --------------------- | ---------------------------------------------- | ----------------------------- |
| variant   | Adding button variant | "primary" \| "secondary" \| "ghost" (required) | variant="primary"             |
| children  | Adding button content | string \| JSX Component (required)             | Some Text \| <YourComponent/> |
| theme     | Adding button theme   | `{ background?: string; foreground?:string }`  | size="m"                      |

### Checkbox

| Parameter | Usage                    | Type                    | Example                  |
| --------- | ------------------------ | ----------------------- | ------------------------ |
| checked   | Adding checked state     | boolean (default=false) | checked={false}          |
| label     | Adding label to Checkbox | string                  | label="Click Me Please!" |
| disabled  | Adding disabled state    | boolean (default=false) | disabled={true}          |

### Grid

| Parameter      | Usage                  | Type                                                                                          | Example                 |
| -------------- | ---------------------- | --------------------------------------------------------------------------------------------- | ----------------------- |
| gap            | Adding gap             | number                                                                                        | gap={10}                |
| container      | Adding container       | boolean                                                                                       | container={false}       |
| size           | Adding size            | 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12                                   | size={1}                |
| mdSize         | Adding medium size     | 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12                                   | mdSize={2}              |
| smSize         | Adding small size      | 1 \| 2 \| 3 \| 4 \| 5 \| 6 \| 7 \| 8 \| 9 \| 10 \| 11 \| 12                                   | smSize={4}              |
| flexDirection  | Adding flex direction  | "column" \| "row"                                                                             | flexDirection="column"  |
| justifyContent | Adding justify content | "space-around" \| "space-between" \| "space-evenly" \| "flex-end" \| "flex-start" \| "center" | justifyContent="center" |
| alignItems     | Adding align items     | "flex-end" \| "flex-start" \| "center"                                                        | alignItems="flex-end"   |

### Input

| Parameter      | Usage                      | Type                                                                                                                                                                                                                                                                                                                           | Example                     |
| -------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- |
| placeholder    | Adding placeholder         | string                                                                                                                                                                                                                                                                                                                         | placeholder="Email Address" |
| label          | Adding label               | string                                                                                                                                                                                                                                                                                                                         | label="Email Address"       |
| error          | Adding error state         | boolean                                                                                                                                                                                                                                                                                                                        | error={false}               |
| iconLeft       | Adding left icon           | "IcEye" \| "IcEyeSlash" \| "IcCheck" \| "IcHamburger" \| "IcNotification" \| "IcSettings" \| "IcUser" \| "IcLogout" \| "IcDashboard" \| "IcSwap" \| "IcLogin" \| "IcInfo" \| "IcHistory" \| "IcTrash" \| "IcSearch" \| "IcArrowDown" \| "IcArrowUp" \| "IcArrowRight" \| "IcArrowLeft" \| "IcWallet" \| "IcDollar" \| "IcSend" | iconLeft="IcEye"            |
| iconRight      | Adding right icon          | "IcEye" \| "IcEyeSlash" \| "IcCheck" \| "IcHamburger" \| "IcNotification" \| "IcSettings" \| "IcUser" \| "IcLogout" \| "IcDashboard" \| "IcSwap" \| "IcLogin" \| "IcInfo" \| "IcHistory" \| "IcTrash" \| "IcSearch" \| "IcArrowDown" \| "IcArrowUp" \| "IcArrowRight" \| "IcArrowLeft" \| "IcWallet" \| "IcDollar" \| "IcSend" | rightLeft="IcEye"           |
| type           | Adding type input          | "number" \| "text" \| "tel" \| "email" \| "password"                                                                                                                                                                                                                                                                           | type="text"                 |
| iconLeftEvent  | Adding event to left icon  | (() => void)                                                                                                                                                                                                                                                                                                                   | iconLeftEvent={yourEvent}   |
| iconRightEvent | Adding event to right icon | (() => void)                                                                                                                                                                                                                                                                                                                   | iconRightEvent={yourEvent}  |

### LabelValue

| Parameter | Usage                 | Type              | Example            |
| --------- | --------------------- | ----------------- | ------------------ |
| disabled  | Adding disabled state | boolean           | disabled={false}   |
| label     | Adding label          | string (required) | label="Username"   |
| name      | Adding variant        | string (required) | variant="username" |

### Lozenge

| Parameter | Usage                 | Type                                                                                                                                                                                                 | Example                |
| --------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| variant   | Adding disabled state | "black-strong" \| "black-light" \| "primary-strong" \| "primary-light" \| "danger-strong" \| "danger-light" \| "success-strong" \| "success-light" \| "warning-strong" \| "warning-light" (required) | variant="black-strong" |
| label     | Adding label          | string                                                                                                                                                                                               | label="My Label"       |

### Radio

| Parameter | Usage        | Type   | Example          |
| --------- | ------------ | ------ | ---------------- |
| label     | Adding label | string | label="My Label" |

### Text

| Parameter | Usage                       | Type                                                     | Example          |
| --------- | --------------------------- | -------------------------------------------------------- | ---------------- |
| variant   | Adding variant              | "h1" \| "h2" \| "h3" \| "h4" \| "p" \| "mute" (required) | label="My Label" |
| children  | Adding component or content | string \| JSX Component (required)                       | label="My Label" |

### Toggler

| Parameter | Usage                | Type    | Example         |
| --------- | -------------------- | ------- | --------------- |
| checked   | Adding checked state | boolean | checked={false} |

## Contributing

Check out the [Contributing Guidelines](CONTRIBUTING.md)
