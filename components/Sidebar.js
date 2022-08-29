import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import { HeartIcon, RssIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playistAtom";
import useSpotify from "../hooks/useSpotify";

function Sidebar() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  console.log("Yo picked playlist >>>>", playlistId);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  const router = useRouter();

  //   const activeMenu = useMemo(
  //     () => menuItems.find((menu) => menu.link === router.pathname),
  //     [router.pathname]
  //   );

  const menuItems = [
    { id: 1, label: "Home", icon: HomeIcon, link: "/" },
    { id: 2, label: "Search", icon: SearchIcon, link: "/Search" },
    { id: 3, label: "Your Library", icon: LibraryIcon, link: "/YourLibrary" },
    {
      id: 4,
      label: "Create Playlist",
      icon: PlusCircleIcon,
      link: "/CreatePlaylist",
    },
    { id: 5, label: "Liked Songs", icon: HeartIcon, link: "/LikedSongs" },
    { id: 6, label: "Your Episodes", icon: RssIcon, link: "/YourEpisodes" },
  ];

  const redirectUser = "/YourLibrary";
  return (
    <div
      className="text-gray-500 p-5 text-sm lg:text-sm  border-r
    border-gray-900 overflow-y-scroll scrollbar-hide h-screen sm:max-w-[12rem] lg-max-w-[15rem] hidden md:inline-flex pb-36"
    >
      <div className="space-y-4">
        <div>
          {menuItems.map(({ icon: Icon, ...menu }) => {
            return (
              <Link key={menu.id} href={menu.link}>
                <a className="flex items-center space-x-2 space-y-4 hover:text-white hover:cursor-pointer justify-start">
                  <div className="h-7 w-7">
                    <Icon />
                  </div>
                  <div>
                    <p>{menu.label}</p>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>

        {/* <button className="flex items-center space-x-2 hover:text-white ">
                <HomeIcon className="h-5 w-5"/>
                <p>Home</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white ">
                <SearchIcon className="h-5 w-5"/>
                <p>Search</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white ">
                <LibraryIcon className="h-5 w-5"/>
                <a href="./YourLibrary"></a>
            </button>
            <hr className="border-t-[0.1px] border-gray-900"/>

            <button className="flex items-center space-x-2 hover:text-white ">
                <PlusCircleIcon className="h-5 w-5"/>
                <p>Create Playlist</p>
            </button> */}
        {/* <button className="flex items-center space-x-2 hover:text-white ">
                <HeartIcon className="h-5 w-5 text-red-600"/>
                <p>Liked Songs</p>
            </button>
            <button className="flex items-center space-x-2 hover:text-white ">
                <RssIcon className="h-5 w-5 text-blue-500 "/>
                <p>Your Episodes</p>
            </button> */}
        <hr className="border-t-[0.1px] border-gray-900" />

        <div className="">
          {playlists.map((playlist) => (
            <Link href={redirectUser}>
              <p
                key={playlist.id}
                onClick={() => setPlaylistId(playlist.id)}
                className="cursor-pointer pb-5 hover:text-white"
              >
                {playlist.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
