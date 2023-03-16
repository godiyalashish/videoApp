const GOOGLE_API_KEY = "AIzaSyAnGVii1qKyyS_re3Sk77le6SggOhoYL2g";
export const YOUTUBE_API_LINK = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=52&regionCode=IN&key="+GOOGLE_API_KEY;
export const LOAD_VIDEO_BY_ID = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="
export const YOUTUBE_SEARCH_SUGGESTION = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="