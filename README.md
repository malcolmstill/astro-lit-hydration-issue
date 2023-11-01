# Astro + Lit SSR hydration issue

<img width="1172" alt="Screenshot 2023-11-01 at 12 19 37" src="https://github.com/malcolmstill/astro-lit-hydration-issue/assets/2567177/d3453980-6e1d-407b-a6f7-29fef716b643">

## Details

This is a minimal reproduction built by:

1. Create astro project
```
npm create astro@latest
```

(empty project using typescript)

2. Add lit

```
npx astro add lit
```

3. Update tsconfig

Add options `experimentalDecorators` `true` and `useDefineForClassFields` `false`:

```
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "experimentalDecorators": true,
    "useDefineForClassFields": false
  }
}

```

4. Add components (see `index.astro` + `src/components/`)
