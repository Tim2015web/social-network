import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { friendsData, Friends } from "./friendsData";

interface FriendsState {
  friends: Friends[];
  allFriends: Friends[]; // Добавлено!
  pageSize: 5 | 10 | 20 | 50;
  totalFriendsCount: number;
  currentPage: number;
  isFetching: boolean;
  isFollowing: number[];
  toggleFollow: (friendId: number, shouldFollow: boolean) => void;
  setFriends: (friends: Friends[]) => void;
  setCurrentPage: (newPage: number) => void;
  setPageSize: (pageSize: 5 | 10 | 20 | 50) => void;
  handlePageSizeChange: (value: 5 | 10 | 20 | 50) => void;
  handlePageChange: (direction: 1 | -1, pagesCount: number) => void;
  handleSubscription: (friendId: number, shouldFollow: boolean) => void;
  getFriends: (currentPage: number, pageSize: 5 | 10 | 20 | 50) => void;
}

export const useFriendsStore = create<FriendsState>()(
  devtools((set, get) => ({
    friends: [], // Текущая страница
    allFriends: friendsData, // Полный список друзей
    pageSize: 5,
    totalFriendsCount: friendsData.length,
    currentPage: 1,
    isFetching: false,
    isFollowing: [],

    toggleFollow: (friendId, shouldFollow) => {
      set((state) => ({
        allFriends: state.allFriends.map((friend) =>
          friend.id === friendId ? { ...friend, status: shouldFollow } : friend
        ),
      }));
      get().getFriends(get().currentPage, get().pageSize);
    },

    setFriends: (friends) => set({ friends }),

    setCurrentPage: (newPage) => set({ currentPage: newPage }),

    setPageSize: (pageSize) => set({ pageSize }),

    handlePageSizeChange: (value) => {
      set({ pageSize: value, currentPage: 1 });
      get().getFriends(1, value);
    },

    handlePageChange: (direction, pagesCount) => {
      const newPage = get().currentPage + direction;
      if (newPage >= 1 && newPage <= pagesCount) {
        set({ currentPage: newPage });
        get().getFriends(newPage, get().pageSize);
      }
    },

    handleSubscription: (friendId, shouldFollow) => {
      set((state) => ({
        isFollowing: [...state.isFollowing, friendId],
      }));
      get().toggleFollow(friendId, shouldFollow);
      set((state) => ({
        isFollowing: state.isFollowing.filter((id) => id !== friendId),
      }));
    },

    getFriends: (currentPage, pageSize) => {
      set({ isFetching: true });
      const allFriends = get().allFriends;
      const startIndex = (currentPage - 1) * pageSize;
      const paginatedFriends = allFriends.slice(
        startIndex,
        startIndex + pageSize
      );
      set({
        isFetching: false,
        friends: paginatedFriends,
      });
    },
  }))
);
