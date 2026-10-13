/**
 * Ongoing Projects gallery — image manifest.
 *
 * One entry per image file actually saved in /public/Ongoing, referenced
 * through public URLs (never imported as source modules). Filenames and
 * extension are copied exactly as stored on disk; nothing is renamed,
 * regenerated or downloaded.
 *
 * The repository contains 11 ongoing project images (ongoin1–12, ongoin5
 * absent). Labels stay neutral — no project, client, location, date or
 * completion claims are asserted because no confirmed metadata exists.
 *
 * `alt` is derived the same neutral way so screen readers describe the card
 * without guessing at unverified project details.
 */
export const ONGOING_PROJECTS = [
  {
    file: "ongoin1.png",
    label: "Ongoing Project 01",
    alt: "Ongoing project 01 - site photograph, covering work Nathan Associates is currently executing",
  },
  {
    file: "ongoin2.png",
    label: "Ongoing Project 02",
    alt: "Ongoing project 02 - site photograph, covering work Nathan Associates is currently executing",
  },
  {
    file: "ongoin3.png",
    label: "Ongoing Project 03",
    alt: "Ongoing project 03 - site photograph, covering work Nathan Associates is currently executing",
  },
  {
    file: "ongoin4.png",
    label: "Ongoing Project 04",
    alt: "Ongoing project 04 - site photograph, covering work Nathan Associates is currently executing",
  },
  {
    file: "ongoin6.png",
    label: "Ongoing Project 05",
    alt: "Ongoing project 05 - site photograph, covering work Nathan Associates is currently executing",
  },
  {
    file: "ongoin7.png",
    label: "Ongoing Project 06",
    alt: "Ongoing project 06 - site photograph, covering work Nathan Associates is currently executing",
  },
  {
    file: "ongoin8.png",
    label: "Ongoing Project 07",
    alt: "Ongoing project 07 - site photograph, covering work Nathan Associates is currently executing",
  },
  {
    file: "ongoin9.png",
    label: "Ongoing Project 08",
    alt: "Ongoing project 08 - site photograph, covering work Nathan Associates is currently executing",
  },
  {
    file: "ongoin10.png",
    label: "Ongoing Project 09",
    alt: "Ongoing project 09 - site photograph, covering work Nathan Associates is currently executing",
  },
  {
    file: "ongoin11.png",
    label: "Ongoing Project 10",
    alt: "Ongoing project 10 - site photograph, covering work Nathan Associates is currently executing",
  },
  {
    file: "ongoin12.png",
    label: "Ongoing Project 11",
    alt: "Ongoing project 11 - site photograph, covering work Nathan Associates is currently executing",
  },
];

/** Public URL for an ongoing project image file (reference, not an import). */
export const ongoingProjectsSrc = (file) => `/Ongoing/${file}`;
