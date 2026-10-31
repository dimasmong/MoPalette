import type { Language } from '../../types'

export interface TranslationDictionary {
  brand: {
    name: string
    tagline: string
    description: string
  }
  nav: {
    workspace: string
    howItWorks: string
    faq: string
    openSource: string
    privacy: string
    github: string
    themeToggle: string
    langToggle: string
  }
  upload: {
    dropTitle: string
    dropSubtitle: string
    browseButton: string
    pasteHint: string
    fileTypes: string
    replaceImage: string
    removeImage: string
    imageInfo: string
    errorCorrupted: string
    errorUnsupported: string
  }
  eyedropper: {
    title: string
    instruction: string
    zoomHint: string
    sampledColor: string
    transparentPixel: string
    replaceSwatch: string
    addToPalette: string
    copySampled: string
    magnifier: string
  }
  controls: {
    title: string
    colorCount: string
    preset: string
    presetBalanced: string
    presetDominant: string
    presetVibrant: string
    presetMuted: string
    presetBalancedDesc: string
    presetDominantDesc: string
    presetVibrantDesc: string
    presetMutedDesc: string
    accuracy: string
    accuracyFast: string
    accuracyBalanced: string
    accuracyHigh: string
    accuracyNote: string
    colorSpace: string
    ignoreTransparent: string
    regenerate: string
    regenerateTooltip: string
    reset: string
  }
  palette: {
    title: string
    swatchCount: string
    lockColor: string
    unlockColor: string
    moveLeft: string
    moveRight: string
    removeSwatch: string
    addSwatch: string
    copyHex: string
    copyRgb: string
    copyHsl: string
    copyOklch: string
    copyAll: string
    clusterPopulation: string
    clusterProportion: string
    clusterDisclosure: string
    lockedNotice: string
  }
  colorDetail: {
    title: string
    hexLabel: string
    rgbLabel: string
    hslLabel: string
    oklchLabel: string
    contrastTitle: string
    contrastDesc: string
    againstWhite: string
    againstBlack: string
    normalText: string
    largeText: string
    suggestedText: string
    luminance: string
    pass: string
    fail: string
  }
  export: {
    button: string
    title: string
    tabPng: string
    tabSvg: string
    tabCss: string
    tabJson: string
    tabTxt: string
    download: string
    copyCode: string
    copied: string
    pngDesc: string
    svgDesc: string
    cssDesc: string
    jsonDesc: string
    txtDesc: string
    close: string
  }
  guide: {
    title: string
    subtitle: string
    step1Title: string
    step1Desc: string
    step2Title: string
    step2Desc: string
    step3Title: string
    step3Desc: string
  }
  faq: {
    title: string
    subtitle: string
    q1: string
    a1: string
    q2: string
    a2: string
    q3: string
    a3: string
    q4: string
    a4: string
    q5: string
    a5: string
  }
  openSource: {
    title: string
    subtitle: string
    mainEngine: string
    mainEngineDesc: string
    author: string
    license: string
    repository: string
    packagesTitle: string
    notice: string
    close: string
  }
  privacy: {
    title: string
    subtitle: string
    section1Title: string
    section1Text: string
    section2Title: string
    section2Text: string
    section3Title: string
    section3Text: string
    close: string
  }
  footer: {
    copyright: string
    credits: string
    privacy: string
    sourceCode: string
  }
}

export const translations: Record<Language, TranslationDictionary> = {
  en: {
    brand: {
      name: 'MoPalette',
      tagline: 'Extract Colors From Any Image',
      description:
        'Upload an image to discover its dominant colors, create a custom palette, and export colors for your next project.',
    },
    nav: {
      workspace: 'Workspace',
      howItWorks: 'How it works',
      faq: 'FAQ',
      openSource: 'Open Source & Credits',
      privacy: 'Privacy',
      github: 'GitHub',
      themeToggle: 'Toggle theme',
      langToggle: 'Switch language',
    },
    upload: {
      dropTitle: 'Drop your image here, or browse',
      dropSubtitle: 'Supports PNG, JPG, WebP, AVIF — Instant local analysis',
      browseButton: 'Choose an Image',
      pasteHint: 'Tip: You can also paste directly from your clipboard (Ctrl+V)',
      fileTypes: 'PNG, JPG, WEBP, AVIF up to 25MB',
      replaceImage: 'Replace image',
      removeImage: 'Remove image',
      imageInfo: 'Dimensions',
      errorCorrupted: 'The selected file could not be decoded. Please choose a valid image file.',
      errorUnsupported: 'Unsupported file format. Please upload a PNG, JPEG, WebP, or AVIF image.',
    },
    eyedropper: {
      title: 'Manual Eyedropper',
      instruction: 'Click or tap anywhere on the image to pick a specific pixel color.',
      zoomHint: 'Pixel Magnifier (11×11 zoom)',
      sampledColor: 'Sampled Color',
      transparentPixel: 'Transparent pixel detected',
      replaceSwatch: 'Replace active swatch',
      addToPalette: 'Add as new color',
      copySampled: 'Copy HEX',
      magnifier: 'Loupe Magnifier',
    },
    controls: {
      title: 'Extraction Settings',
      colorCount: 'Palette Swatches Count',
      preset: 'Color Preset Mode',
      presetBalanced: 'Balanced',
      presetDominant: 'Dominant',
      presetVibrant: 'Vibrant',
      presetMuted: 'Muted',
      presetBalancedDesc: 'Harmonious distribution across primary hue clusters',
      presetDominantDesc: 'Ranked strictly by highest pixel frequency',
      presetVibrantDesc: 'Emphasizes high saturation and lively chroma',
      presetMutedDesc: 'Focuses on soft, subdued, and earthy tones',
      accuracy: 'Sampling Precision',
      accuracyFast: 'Fast (10px step)',
      accuracyBalanced: 'Balanced (4px step)',
      accuracyHigh: 'High Accuracy (1px step)',
      accuracyNote: 'Precision controls pixel sampling density, not aesthetic resolution.',
      colorSpace: 'Quantization Space',
      ignoreTransparent: 'Exclude transparent pixels',
      regenerate: 'Regenerate Palette',
      regenerateTooltip: 'Regenerates unlocked swatches while preserving locked ones',
      reset: 'Reset to Default',
    },
    palette: {
      title: 'Active Palette',
      swatchCount: 'colors',
      lockColor: 'Lock color (preserves across regeneration)',
      unlockColor: 'Unlock color',
      moveLeft: 'Move swatch left',
      moveRight: 'Move swatch right',
      removeSwatch: 'Remove color',
      addSwatch: 'Add color',
      copyHex: 'Copy HEX',
      copyRgb: 'Copy RGB',
      copyHsl: 'Copy HSL',
      copyOklch: 'Copy OKLCH',
      copyAll: 'Copy All HEX Values',
      clusterPopulation: 'Cluster Population',
      clusterProportion: 'Cluster Share',
      clusterDisclosure:
        'Percentages represent estimated cluster populations from sampled pixels, not absolute pixel counts.',
      lockedNotice: 'Locked swatches remain unchanged when regenerating.',
    },
    colorDetail: {
      title: 'Color Inspector & Accessibility',
      hexLabel: 'HEX',
      rgbLabel: 'RGB',
      hslLabel: 'HSL',
      oklchLabel: 'OKLCH',
      contrastTitle: 'WCAG Contrast Assistance',
      contrastDesc: 'Relative luminance and contrast calculated via WCAG 2.1 formulas.',
      againstWhite: 'Against White (#FFFFFF)',
      againstBlack: 'Against Black (#000000)',
      normalText: 'Normal Text (AA ≥ 4.5:1, AAA ≥ 7:1)',
      largeText: 'Large Text (AA ≥ 3:1, AAA ≥ 4.5:1)',
      suggestedText: 'Recommended Text Color',
      luminance: 'Relative Luminance',
      pass: 'PASS',
      fail: 'FAIL',
    },
    export: {
      button: 'Export Palette',
      title: 'Export Color Palette',
      tabPng: 'PNG Image',
      tabSvg: 'SVG Vector',
      tabCss: 'CSS Variables',
      tabJson: 'JSON Data',
      tabTxt: 'Plain Text',
      download: 'Download File',
      copyCode: 'Copy Code',
      copied: 'Copied to clipboard!',
      pngDesc: 'High-resolution image card showing all swatches with readable color labels.',
      svgDesc: 'Clean, scalable vector graphic suitable for design apps and codebases.',
      cssDesc: 'CSS custom properties ready to paste into your stylesheet or design system.',
      jsonDesc: 'Structured data with HEX, RGB, HSL, OKLCH, and WCAG contrast metrics.',
      txtDesc: 'Simple newline-delimited list of HEX color codes.',
      close: 'Close',
    },
    guide: {
      title: 'How MoPalette Works',
      subtitle: 'Extracting professional color palettes in three effortless steps',
      step1Title: '1. Load Any Image',
      step1Desc:
        'Drag and drop, browse, or paste an image directly from your clipboard. All decoding is 100% client-side.',
      step2Title: '2. Fine-tune & Sample',
      step2Desc:
        'Switch between Balanced, Dominant, Vibrant, or Muted modes. Use the built-in loupe eyedropper to sample exact pixels.',
      step3Title: '3. Lock, Reorder & Export',
      step3Desc:
        'Lock colors you love, reorder swatches, inspect WCAG contrast, and download production-ready PNG, SVG, CSS, or JSON files.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about MoPalette',
      q1: 'Are my images uploaded to any server or cloud?',
      a1: 'No, absolutely not. All image decoding, quantization, and palette generation take place 100% locally in your web browser using HTML5 Canvas and client-side JavaScript. Your images never leave your computer or phone.',
      q2: 'What extraction engine does MoPalette use?',
      a2: 'MoPalette uses the maintained Color Thief library (created by Lokesh Dhakar, licensed under MIT), enhanced with OKLCH quantization, semantic swatches (Vibrant / Muted), and exact Canvas ImageData pixel sampling.',
      q3: 'How does the manual eyedropper work?',
      a3: 'The eyedropper reads directly from the decoded source image pixel buffer. An interactive 11×11 pixel loupe magnifier displays the exact coordinates and true color of the sampled pixel, independent of display scaling or letterboxing.',
      q4: 'What do the cluster percentages represent?',
      a4: 'The percentage displays the estimated cluster population derived from quantization sampling clusters. Because sampling processes pixel representative distributions, this is an honest mathematical estimate rather than a total pixel counter.',
      q5: 'Can I use the exported color palettes commercially?',
      a5: 'Yes! All color palettes you extract or create with MoPalette are yours to use freely in personal and commercial design, web, or print projects.',
    },
    openSource: {
      title: 'Open Source & Credits',
      subtitle: 'MoPalette is built on outstanding open-source software and standards',
      mainEngine: 'Color Extraction Engine',
      mainEngineDesc:
        'Color Thief provides robust color quantization, dominant color discovery, and semantic swatch classification.',
      author: 'Author',
      license: 'License',
      repository: 'Repository',
      packagesTitle: 'Third-Party Libraries & Dependencies',
      notice:
        'MoPalette is released under the MIT License. Upstream third-party licenses and copyrights are strictly respected and preserved.',
      close: 'Close',
    },
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'Your privacy is guaranteed by design: 100% Client-Side Processing',
      section1Title: 'Zero Server Uploads',
      section1Text:
        'When you select, drop, or paste an image into MoPalette, the image file is decoded strictly inside your browser memory using native HTML5 Canvas and Image APIs. At no point is your image transmitted over the network or stored on any external server.',
      section2Title: 'No Analytics or Trackers',
      section2Text:
        'MoPalette does not include third-party tracking scripts, advertising trackers, or telemetry. No cookies or personal data are collected.',
      section3Title: 'Hanya Preferensi Lokal',
      section3Text:
        'Only your preferred theme (Light/Dark) and language choice (EN/ID) are stored locally in your browser localStorage for your convenience.',
      close: 'Close',
    },
    footer: {
      copyright: '© 2026 Dimas Mong. Licensed under the MIT License.',
      credits: 'Open Source & Credits',
      privacy: 'Privacy',
      sourceCode: 'GitHub Repository',
    },
  },
  id: {
    brand: {
      name: 'MoPalette',
      tagline: 'Ekstrak Warna Dari Gambar Apa Pun',
      description:
        'Unggah gambar untuk menemukan warna dominannya, buat palet kustom, dan ekspor warna untuk proyek Anda berikutnya.',
    },
    nav: {
      workspace: 'Ruang Kerja',
      howItWorks: 'Cara Kerja',
      faq: 'FAQ',
      openSource: 'Sumber Terbuka & Kredit',
      privacy: 'Privasi',
      github: 'GitHub',
      themeToggle: 'Ganti tema',
      langToggle: 'Ganti bahasa',
    },
    upload: {
      dropTitle: 'Letakkan gambar Anda di sini, atau pilih berkas',
      dropSubtitle: 'Mendukung PNG, JPG, WebP, AVIF — Pemrosesan lokal instan',
      browseButton: 'Pilih Gambar',
      pasteHint: 'Tip: Anda juga dapat menempelkan langsung dari papan klip (Ctrl+V)',
      fileTypes: 'PNG, JPG, WEBP, AVIF hingga 25MB',
      replaceImage: 'Ganti gambar',
      removeImage: 'Hapus gambar',
      imageInfo: 'Dimensi',
      errorCorrupted: 'Berkas tidak dapat didekode. Silakan pilih berkas gambar yang valid.',
      errorUnsupported: 'Format berkas tidak didukung. Silakan gunakan PNG, JPEG, WebP, atau AVIF.',
    },
    eyedropper: {
      title: 'Pipet Warna Manual',
      instruction: 'Klik atau sentuh di mana saja pada gambar untuk mengambil warna piksel tertentu.',
      zoomHint: 'Kaca Pembesar Piksel (pembesaran 11×11)',
      sampledColor: 'Warna Tersampel',
      transparentPixel: 'Terdeteksi piksel transparan',
      replaceSwatch: 'Ganti petak aktif',
      addToPalette: 'Tambah ke palet',
      copySampled: 'Salin HEX',
      magnifier: 'Lensa Pembesar',
    },
    controls: {
      title: 'Pengaturan Ekstraksi',
      colorCount: 'Jumlah Petak Palet',
      preset: 'Mode Preset Warna',
      presetBalanced: 'Seimbang',
      presetDominant: 'Dominan',
      presetVibrant: 'Cerah (Vibrant)',
      presetMuted: 'Lembut (Muted)',
      presetBalancedDesc: 'Distribusi harmonis di berbagai klaster rona utama',
      presetDominantDesc: 'Diurutkan secara ketat berdasarkan frekuensi piksel tertinggi',
      presetVibrantDesc: 'Menonjolkan saturasi tinggi dan kroma hidup',
      presetMutedDesc: 'Berfokus pada nada lembut, teduh, dan membumi',
      accuracy: 'Presisi Sampling',
      accuracyFast: 'Cepat (langkah 10px)',
      accuracyBalanced: 'Seimbang (langkah 4px)',
      accuracyHigh: 'Akurasi Tinggi (langkah 1px)',
      accuracyNote: 'Presisi mengatur kerapatan sampling piksel, bukan resolusi estetika gambar.',
      colorSpace: 'Ruang Kuantisasi',
      ignoreTransparent: 'Abaikan piksel transparan',
      regenerate: 'Regenerasi Palet',
      regenerateTooltip: 'Membuat ulang petak yang tidak terkunci sambil mempertahankan petak terkunci',
      reset: 'Atur Ulang ke Default',
    },
    palette: {
      title: 'Palet Aktif',
      swatchCount: 'warna',
      lockColor: 'Kunci warna (dipertahankan saat regenerasi)',
      unlockColor: 'Buka kunci warna',
      moveLeft: 'Geser petak ke kiri',
      moveRight: 'Geser petak ke kanan',
      removeSwatch: 'Hapus warna',
      addSwatch: 'Tambah warna',
      copyHex: 'Salin HEX',
      copyRgb: 'Salin RGB',
      copyHsl: 'Salin HSL',
      copyOklch: 'Salin OKLCH',
      copyAll: 'Salin Semua Nilai HEX',
      clusterPopulation: 'Populasi Klaster',
      clusterProportion: 'Porsi Klaster',
      clusterDisclosure:
        'Persentase mewakili perkiraan populasi klaster dari piksel tersampel, bukan jumlah piksel mutlak.',
      lockedNotice: 'Petak yang terkunci tidak akan berubah saat diregenerasi.',
    },
    colorDetail: {
      title: 'Inspektur Warna & Aksesibilitas',
      hexLabel: 'HEX',
      rgbLabel: 'RGB',
      hslLabel: 'HSL',
      oklchLabel: 'OKLCH',
      contrastTitle: 'Bantuan Kontras WCAG',
      contrastDesc: 'Luminansi relatif dan kontras dihitung menggunakan formula resmi WCAG 2.1.',
      againstWhite: 'Terhadap Putih (#FFFFFF)',
      againstBlack: 'Terhadap Hitam (#000000)',
      normalText: 'Teks Normal (AA ≥ 4.5:1, AAA ≥ 7:1)',
      largeText: 'Teks Besar (AA ≥ 3:1, AAA ≥ 4.5:1)',
      suggestedText: 'Warna Teks yang Disarankan',
      luminance: 'Luminansi Relatif',
      pass: 'LOLOS',
      fail: 'GAGAL',
    },
    export: {
      button: 'Ekspor Palet',
      title: 'Ekspor Palet Warna',
      tabPng: 'Gambar PNG',
      tabSvg: 'Vektor SVG',
      tabCss: 'Variabel CSS',
      tabJson: 'Data JSON',
      tabTxt: 'Teks Polos',
      download: 'Unduh Berkas',
      copyCode: 'Salin Kode',
      copied: 'Tersalin ke papan klip!',
      pngDesc: 'Kartu gambar resolusi tinggi dengan petak warna dan label yang jelas.',
      svgDesc: 'Grafik vektor terukur untuk aplikasi desain atau kode web.',
      cssDesc: 'Variabel CSS custom properties siap tempel ke stylesheet Anda.',
      jsonDesc: 'Data terstruktur berisi HEX, RGB, HSL, OKLCH, dan metrik kontras WCAG.',
      txtDesc: 'Daftar kode HEX sederhana dipisahkan baris baru.',
      close: 'Tutup',
    },
    guide: {
      title: 'Cara Kerja MoPalette',
      subtitle: 'Mengekstrak palet warna profesional dalam tiga langkah mudah',
      step1Title: '1. Muat Gambar',
      step1Desc:
        'Seret dan lepas, telusuri berkas, atau tempel gambar langsung dari clipboard Anda. Semua proses 100% lokal di browser.',
      step2Title: '2. Sempurnakan & Sampel',
      step2Desc:
        'Pilih mode Seimbang, Dominan, Cerah, atau Lembut. Gunakan pipet pembesar untuk mengambil warna piksel gambar secara akurat.',
      step3Title: '3. Kunci, Susun & Ekspor',
      step3Desc:
        'Kunci warna yang Anda sukai, ubah urutan, periksa rasio kontras WCAG, dan unduh berkas siap pakai (PNG, SVG, CSS, JSON).',
    },
    faq: {
      title: 'Pertanyaan yang Sering Diajukan',
      subtitle: 'Segala hal yang perlu Anda ketahui tentang MoPalette',
      q1: 'Apakah gambar saya diunggah ke server atau komputasi awan?',
      a1: 'Tidak sama sekali. Semua pendekodean gambar, kuantisasi, dan pembuatan palet dilakukan 100% secara lokal di dalam peramban web Anda. Gambar Anda tidak pernah meninggalkan komputer atau ponsel Anda.',
      q2: 'Mesin ekstraksi apa yang digunakan oleh MoPalette?',
      a2: 'MoPalette menggunakan pustaka Color Thief yang terawat (dibuat oleh Lokesh Dhakar, lisensi MIT), dilengkapi kuantisasi OKLCH, swatches semantik (Vibrant / Muted), dan sampling piksel Canvas ImageData yang presisi.',
      q3: 'Bagaimana cara kerja pipet warna manual?',
      a3: 'Pipet membaca langsung dari penyangga piksel gambar yang didekodekan. Kaca pembesar 11×11 piksel menampilkan koordinat dan warna asli piksel yang dipilih tanpa distorsi tampilan.',
      q4: 'Apa arti dari persentase klaster warna?',
      a4: 'Persentase menunjukkan estimasi ukuran klaster yang dihasilkan oleh algoritma kuantisasi. Ini merupakan estimasi matematis yang transparan dan jujur, bukan penghitung piksel mutlak.',
      q5: 'Bolehkah saya menggunakan palet warna yang diekspor untuk keperluan komersial?',
      a5: 'Tentu saja! Semua palet warna yang Anda ekstrak atau buat bebas digunakan untuk keperluan desain pribadi maupun komersial.',
    },
    openSource: {
      title: 'Sumber Terbuka & Kredit',
      subtitle: 'MoPalette dibangun di atas perangkat lunak sumber terbuka terbaik',
      mainEngine: 'Mesin Ekstraksi Warna',
      mainEngineDesc:
        'Color Thief menyediakan kuantisasi warna yang tangguh, penemuan warna dominan, dan klasifikasi petak semantik.',
      author: 'Pembuat',
      license: 'Lisensi',
      repository: 'Repositori',
      packagesTitle: 'Pustaka & Ketergantungan Pihak Ketiga',
      notice:
        'MoPalette dirilis di bawah Lisensi MIT. Hak cipta dan lisensi pustaka pihak ketiga dihormati dan dipelihara secara utuh.',
      close: 'Tutup',
    },
    privacy: {
      title: 'Kebijakan Privasi',
      subtitle: 'Privasi Anda terjamin: Pemrosesan 100% di Sisi Klien',
      section1Title: 'Nol Pengunggahan ke Server',
      section1Text:
        'Saat Anda memilih, melepas, atau menempelkan gambar ke MoPalette, berkas didekodekan secara ketat di dalam memori peramban Anda. Gambar tidak pernah dikirim melalui jaringan internet ke server mana pun.',
      section2Title: 'Tanpa Analisis atau Pelacak',
      section2Text:
        'MoPalette tidak menyertakan skrip pelacak pihak ketiga, iklan, atau telemetri. Tidak ada data pribadi yang dikumpulkan.',
      section3Title: 'Hanya Preferensi Lokal',
      section3Text:
        'Hanya preferensi tema (Terang/Gelap) dan pilihan bahasa Anda (EN/ID) yang disimpan secara lokal di localStorage peramban.',
      close: 'Tutup',
    },
    footer: {
      copyright: '© 2026 Dimas Mong. Dilisensikan di bawah Lisensi MIT.',
      credits: 'Sumber Terbuka & Kredit',
      privacy: 'Privasi',
      sourceCode: 'Repositori GitHub',
    },
  },
}
