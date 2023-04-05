import { aSide, bSide } from "./data";

export type TrackInfo = {
  title: string;
  src: string;
  comment: string;
};

export type ListDetail = {
    header: string;
    note: string;
    tracks: Array<TrackInfo>;
};

export const A_SIDE: ListDetail = {
    header: 'Words are hard, music is better',
    note: `I've had this on going playlist I've been putting together for myself.
    It's inspired by you/us. Instead of sharing the whole thing (which may
    be a bit much), I've picked out some better ones for this list,
    attaching links and some context. Sometimes it's hard to know what to
    say or if I should at all, so I'll let music try and speak for me.`,
    tracks: [...bSide]
}

export const B_SIDE: ListDetail = {
    header: 'Sounds of evolution',
    note: '',
    tracks: [...aSide]
}
