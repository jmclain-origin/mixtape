import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen text-center">
      <h1 className="text-3xl font-bold text-gray-800">
        404 - Looks like thats not hear yet, enjoy this instead
      </h1>
      <div className="flex flex-col items-center mt-5">
        <a href="https://www.data-card-for-spotify.com/card?user_id=31knnovcfatt7mqmu6yaa5htulxi&limit=10">
          <img
            src="https://www.data-card-for-spotify.com/api/card?user_id=31knnovcfatt7mqmu6yaa5htulxi&hide_top_tracks=1&hide_top_artists=1&limit=10&show_date=1"
            alt="Data Card for Spotify"
          />
          <img
            src="https://www.data-card-for-spotify.com/api/card?user_id=31knnovcfatt7mqmu6yaa5htulxi&hide_top_tracks=0&hide_top_artists=1&hide_playing=1&hide_title=1&hide_recents=1&limit=10"
            alt="Data Card for Spotify"
          />
          <img
            src="https://www.data-card-for-spotify.com/api/card?user_id=31knnovcfatt7mqmu6yaa5htulxi&hide_top_tracks=1&hide_top_artists=0&hide_playing=1&hide_title=1&hide_recents=1&limit=10"
            alt="Data Card for Spotify"
          />
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
