import React from 'react';

/**
 * Official SMIT Logo Component
 * Recreated accurately based on the user's uploaded official SMIT app icon (images (7).png).
 * Features:
 * - Rounded squircle app icon frame (optional via variant="badge" or standalone emblem via variant="emblem")
 * - Blue graduation cap / mortarboard
 * - Vibrant green crescent arch over the 'S'
 * - Bold royal blue 'S' and 'M'
 * - Stylized 'i' with vibrant green circular dot & organic green leaf ribbon
 * - Bold royal blue 'T'
 */
export default function SmitLogo({
  className = "h-11",
  variant = "badge", // "badge" (app icon squircle as in uploaded image) or "emblem" (transparent vector)
  alt = "SMIT - Saylani Mass IT Training"
}) {
  if (variant === "emblem") {
    return (
      <div className={`inline-flex items-center select-none shrink-0 ${className}`}>
        <svg
          viewBox="40 100 440 270"
          className="h-full w-auto block overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label={alt}
        >
          {/* 1. BLUE GRADUATION CAP */}
          <polygon points="124,106 46,136 124,162 202,136" fill="#027ecb" />
          <path d="M 76,146 C 76,146 76,172 124,178 C 172,172 172,146 172,146 Z" fill="#027ecb" />
          <path
            d="M 124,136 Q 196,144 200,172 V 196"
            stroke="#027ecb"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="200" cy="198" r="4.5" fill="#027ecb" />

          {/* 2. VIBRANT GREEN ARCH OVER S */}
          <path
            d="M 38,232 C 34,168 88,126 168,140 C 126,150 78,180 70,228 C 58,233 46,235 38,232 Z"
            fill="#74ba27"
          />

          {/* 3. LETTER S */}
          <path
            d="M 152,228 C 136,214 112,210 94,215 C 76,220 60,236 60,258 C 60,286 84,298 108,306 C 132,314 154,324 154,346 C 154,367 136,381 112,381 C 84,381 64,365 52,346 L 46,366 C 60,388 84,400 114,400 C 148,400 176,380 176,346 C 176,314 148,300 124,292 C 100,284 82,274 82,256 C 82,240 96,228 116,228 C 134,228 146,236 152,244 Z"
            fill="#027ecb"
          />

          {/* 4. LETTER M */}
          <path
            d="M 188,214 H 222 L 257,322 L 292,214 H 326 V 396 H 298 V 264 L 267,358 H 247 L 216,264 V 396 H 188 Z"
            fill="#027ecb"
          />

          {/* 5. LETTER i */}
          <circle cx="370" cy="182" r="23" fill="#74ba27" />
          <path d="M 356,214 H 384 V 396 H 360 C 360,377 368,342 368,214 Z" fill="#027ecb" />
          <path
            d="M 378,210 C 366,218 353,238 353,267 C 353,300 376,322 372,357 C 368,376 357,388 349,396 C 363,392 380,372 380,344 C 380,312 357,290 361,254 C 365,234 374,220 378,210 Z"
            fill="#74ba27"
          />

          {/* 6. LETTER T */}
          <path d="M 400,214 H 478 V 238 H 452 V 396 H 425 V 238 H 400 Z" fill="#027ecb" />
        </svg>
      </div>
    );
  }

  // Default: Exact App Icon with Rounded Squircle Frame as in uploaded image
  return (
    <div className={`inline-flex items-center justify-center select-none shrink-0 ${className}`}>
      <svg
        viewBox="0 0 500 500"
        className="h-full w-auto block aspect-square drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={alt}
      >
        {/* Rounded Squircle App Icon Container matching user uploaded image */}
        <rect
          x="12"
          y="12"
          width="476"
          height="476"
          rx="110"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="2.5"
        />

        {/* LOGO EMBLEM GROUP */}
        <g transform="translate(14, 20)">
          {/* 1. BLUE GRADUATION CAP */}
          <polygon points="124,106 46,136 124,162 202,136" fill="#027ecb" />
          <path d="M 76,146 C 76,146 76,172 124,178 C 172,172 172,146 172,146 Z" fill="#027ecb" />
          <path
            d="M 124,136 Q 196,144 200,172 V 196"
            stroke="#027ecb"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="200" cy="198" r="4.5" fill="#027ecb" />

          {/* 2. VIBRANT GREEN ARCH OVER S */}
          <path
            d="M 38,232 C 34,168 88,126 168,140 C 126,150 78,180 70,228 C 58,233 46,235 38,232 Z"
            fill="#74ba27"
          />

          {/* 3. LETTER S */}
          <path
            d="M 152,228 C 136,214 112,210 94,215 C 76,220 60,236 60,258 C 60,286 84,298 108,306 C 132,314 154,324 154,346 C 154,367 136,381 112,381 C 84,381 64,365 52,346 L 46,366 C 60,388 84,400 114,400 C 148,400 176,380 176,346 C 176,314 148,300 124,292 C 100,284 82,274 82,256 C 82,240 96,228 116,228 C 134,228 146,236 152,244 Z"
            fill="#027ecb"
          />

          {/* 4. LETTER M */}
          <path
            d="M 188,214 H 222 L 257,322 L 292,214 H 326 V 396 H 298 V 264 L 267,358 H 247 L 216,264 V 396 H 188 Z"
            fill="#027ecb"
          />

          {/* 5. LETTER i */}
          <circle cx="370" cy="182" r="23" fill="#74ba27" />
          <path d="M 356,214 H 384 V 396 H 360 C 360,377 368,342 368,214 Z" fill="#027ecb" />
          <path
            d="M 378,210 C 366,218 353,238 353,267 C 353,300 376,322 372,357 C 368,376 357,388 349,396 C 363,392 380,372 380,344 C 380,312 357,290 361,254 C 365,234 374,220 378,210 Z"
            fill="#74ba27"
          />

          {/* 6. LETTER T */}
          <path d="M 400,214 H 478 V 238 H 452 V 396 H 425 V 238 H 400 Z" fill="#027ecb" />
        </g>
      </svg>
    </div>
  );
}
