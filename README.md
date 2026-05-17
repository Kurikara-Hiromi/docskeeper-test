# docskeeper-test

## Install

```bash
npm install -g docskeeper-test
```

## Usage

```bash
docskeeper-test
```

## API

### throttle

Throttles repeated calls to a function so it runs at most once per interval.

```typescript
import { throttle } from 'docskeeper-test';

const handleResize = throttle(() => {
  console.log('Resized');
}, { intervalMs: 200 });

window.addEventListener('resize', handleResize);
```

**Options:**
- `intervalMs` (number, required): Minimum milliseconds between function calls
- `leading` (boolean, optional): Whether to call the function on the leading edge
