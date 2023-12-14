import { atom } from 'jotai';

export const activeMenu = atom("grid");
export const filteredGamesAtom = atom([])
export const activePageAtom = atom(1)
export const loadingGame = atom(false);
