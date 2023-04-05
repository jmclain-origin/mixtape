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
    note: `There is to much more to say and mostly not worth saying. I get in my head a lot. These last couple of
     months have insightful. I'm grateful that you have come back into my life. Since that day I've put through 
     many emotions. Never was one directed at you, because of you I've had to look at myself and evaluate what it is
     I want. Thank you for your patience. Throughout the journey this far the playlist has evolved, more songs that I 
     wake to in my head. Things that make me think of you somehow. I love you.`,
    tracks: [...aSide]
}
