package database_creation

import (
	"backend/database"
	"math/rand"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

func CreateTracksDatabase(db database.Database) {

	tracks := db.Tracks()
	authors := db.Authors()
	rand.NewSource(time.Now().UnixNano())
	songs := []string{
		"Shape of You", "Blinding Lights", "Dance Monkey", "Someone You Loved", "Rockstar",
		"Closer", "Thinking Out Loud", "One Dance", "Sunflower", "Señorita",
		"Perfect", "Despacito", "Havana", "God's Plan", "Old Town Road",
		"Shallow", "Girls Like You", "Believer", "Lucid Dreams", "Without Me",
		"Sicko Mode", "Bad Guy", "Thank U, Next", "7 Rings", "Faded",
		"Love Yourself", "Stressed Out", "Meant to Be", "Memories", "Circles",
		"Attention", "Photograph", "Counting Stars", "Wake Me Up", "Hello",
		"All of Me", "Uptown Funk", "Sugar", "Sorry", "Thinking Bout You",
		"Rolling in the Deep", "Royals", "Demons", "Radioactive", "Let Her Go",
		"Somebody That I Used to Know", "Call Me Maybe", "Locked Out of Heaven", "Can't Feel My Face", "Happy",
		"Take Me to Church", "Stay With Me", "Chandelier", "Dark Horse", "Rude",
		"Fancy", "Shake It Off", "All About That Bass", "Blank Space", "See You Again",
		"Lean On", "What Do You Mean?", "Hello", "Cheap Thrills", "Panda",
		"This Is What You Came For", "Don't Let Me Down", "Rockabye", "In My Feelings", "Taki Taki",
		"I Like It", "Eastside", "Havana", "Shallow", "Natural",
		"Sweet but Psycho", "Bad Liar", "Don't Start Now", "Circles", "Break My Heart",
		"Savage Love", "Watermelon Sugar", "Blinding Lights", "Levitating", "Mood",
		"Good 4 U", "Peaches", "Montero (Call Me By Your Name)", "Stay", "Butter",
		"Drivers License", "Positions", "Save Your Tears", "Afterglow", "Anyone",
		"Take My Breath", "Cold Heart", "Industry Baby", "My Universe", "Shivers",
	}
	filenames := []string{
		"shape_of_you", "blinding_lights", "dance_monkey", "someone_you_loved", "rockstar",
		"closer", "thinking_out_loud", "one_dance", "sunflower", "señorita",
		"perfect", "despacito", "havana", "gods_plan", "old_town_road",
		"shallow", "girls_like_you", "believer", "lucid_dreams", "without_me",
		"sicko_mode", "bad_guy", "thank_u_next", "7_rings", "faded",
		"love_yourself", "stressed_out", "meant_to_be", "memories", "circles",
		"attention", "photograph", "counting_stars", "wake_me_up", "hello",
		"all_of_me", "uptown_funk", "sugar", "sorry", "thinking_bout_you",
		"rolling_in_the_deep", "royals", "demons", "radioactive", "let_her_go",
		"somebody_that_i_used_to_know", "call_me_maybe", "locked_out_of_heaven", "cant_feel_my_face", "happy",
		"take_me_to_church", "stay_with_me", "chandelier", "dark_horse", "rude",
		"fancy", "shake_it_off", "all_about_that_bass", "blank_space", "see_you_again",
		"lean_on", "what_do_you_mean", "cheap_thrills", "panda",
		"this_is_what_you_came_for", "dont_let_me_down", "rockabye", "in_my_feelings", "taki_taki",
		"i_like_it", "eastside", "natural",
		"sweet_but_psycho", "bad_liar", "dont_start_now", "break_my_heart",
		"savage_love", "watermelon_sugar", "levitating", "mood",
		"good_4_u", "peaches", "montero_call_me_by_your_name", "stay", "butter",
		"drivers_license", "positions", "save_your_tears", "afterglow", "anyone",
		"take_my_breath", "cold_heart", "industry_baby", "my_universe", "shivers",
	}
	durations := []string{
		"3:53", "3:20", "3:29", "3:02", "3:38",
		"4:04", "3:41", "2:54", "2:38", "3:11",
		"4:23", "3:47", "3:17", "3:19", "2:37",
		"3:37", "3:55", "3:24", "4:00", "3:21",
		"3:16", "3:14", "3:27", "2:58", "3:32",
		"3:53", "3:22", "2:43", "3:09", "3:35",
		"3:31", "4:18", "4:17", "4:07", "4:15",
		"4:29", "4:30", "3:59", "3:04", "3:12",
		"3:44", "2:50", "3:13", "2:56", "4:01",
		"3:06", "3:10", "2:48", "3:05", "4:03",
		"3:30", "3:15", "2:39", "3:01", "2:55",
		"3:40", "3:26", "4:12", "3:45", "3:50",
		"4:11", "4:22", "4:26", "2:51", "3:07",
		"4:09", "2:44", "3:28", "4:06", "3:18",
		"3:25", "2:40", "2:59", "3:08", "3:46",
		"4:02", "4:20", "3:33", "2:53", "3:39",
		"3:34", "4:13", "4:04", "4:08", "3:49",
		"3:23", "2:41", "4:16", "4:05", "3:03",
		"2:57", "2:45", "4:14", "4:10", "3:37",
		"4:19", "3:42", "3:36", "2:52", "4:21",
	}
	genres := []string{
		"pop", "rock", "jazz", "hip_hop", "electronic",
		"classical", "reggae", "blues", "country", "dance",
		"indie", "metal", "alternative", "r_and_b", "folk",
		"soul", "punk", "disco", "funk", "latin",
		"trap", "house", "techno", "dubstep", "synth_pop",
		"grunge", "k_pop", "gospel", "ambient", "drum_and_bass",
		"lo_fi", "ska", "garage", "new_wave", "post_rock",
		"trip_hop", "chillout", "progressive_rock", "hard_rock", "psychedelic",
		"emo", "swing", "world_music", "avant_garde", "bluegrass",
		"bossa_nova", "tango", "samba", "afrobeat", "highlife",
		"new_age", "opera", "baroque", "romantic", "early_music",
		"hardcore", "reggaeton", "grime", "trance", "j_pop",
		"orchestra", "vocal", "soundtrack", "easy_listening", "exotica",
		"klezmer", "cumbia", "merengue", "salsa", "flamenco",
		"tropipop", "bachata", "zouk", "calypso", "mambo",
		"boogie_woogie", "ragtime", "chanson", "industrial", "neoclassical",
		"shoegaze", "electro", "electropop", "chiptune", "vaporwave",
		"noise", "musique_concrète", "ethnic", "viking_metal", "christian_rock",
		"future_bass", "breakbeat", "glitch", "downtempo", "darkwave",
		"synthwave", "vocal_trance", "cyberpunk", "medieval", "epic",
	}

	for i := 0; i < 1000; i++ {

		author := authors.GetRandomAuthor()

		track := database.TrackData{
			Id:        primitive.NewObjectID(),
			Title:     songs[rand.Intn(len(songs))],
			Filename:  filenames[rand.Intn(len(filenames))],
			Duration:  durations[rand.Intn(len(durations))],
			Genre:     genres[rand.Intn(len(genres))],
			Image:     "https://picsum.photos/300",
			Author:    author.Title,
			Author_ID: author.Id.Hex(),
		}
		tracks.AddTrack(track)
	}
}

func CreateAuthorsDatabase(db database.Database) {
	authors := db.Authors()

	artists := []string{
		"The Beatles",
		"Led Zeppelin",
		"Queen",
		"Michael Jackson",
		"Madonna",
		"Elton John",
		"David Bowie",
		"Adele",
		"Taylor Swift",
		"Kanye West",
		"Beyoncé",
		"Rihanna",
		"Eminem",
		"Drake",
		"Post Malone",
		"Billie Eilish",
		"Ed Sheeran",
		"Katy Perry",
		"Bruno Mars",
		"Coldplay",
		"U2",
		"The Rolling Stones",
		"Nirvana",
		"Pink Floyd",
		"The Who",
		"Fleetwood Mac",
		"The Doors",
		"The Beach Boys",
		"The Police",
		"Genesis",
		"Deep Purple",
		"Black Sabbath",
		"The Clash",
		"Ramones",
		"Sex Pistols",
		"Talking Heads",
		"Joy Division",
		"The Smiths",
		"Radiohead",
		"The Cure",
		"Depeche Mode",
		"Duran Duran",
		"Wham!",
		"George Michael",
		"Prince",
		"Lionel Richie",
		"Cyndi Lauper",
		"Tina Turner",
		"Whitney Houston",
		"Aretha Franklin",
		"Stevie Wonder",
		"James Brown",
		"Marvin Gaye",
		"Otis Redding",
		"Sam Cooke",
		"Ella Fitzgerald",
		"Billie Holiday",
		"Louis Armstrong",
		"Diana Ross",
		"Janet Jackson",
		"Shakira",
		"Usher",
		"Christina Aguilera",
		"Brandy",
		"Missy Elliott",
		"Snoop Dogg",
		"Dr. Dre",
		"Kendrick Lamar",
		"J. Cole",
		"Lil Wayne",
		"Migos",
		"Travis Scott",
		"Cardi B",
		"Nicki Minaj",
		"Rihanna",
		"A$AP Rocky",
		"Mac Miller",
		"Childish Gambino",
		"Lana Del Rey",
		"Halsey",
		"Demi Lovato",
		"Selena Gomez",
		"Ariana Grande",
		"Justin Bieber",
		"One Direction",
		"The Weeknd",
		"Khalid",
		"Miley Cyrus",
		"Dua Lipa",
		"Lizzo",
		"Post Malone",
		"Janelle Monáe",
		"Sia",
		"Bebe Rexha",
		"Zayn Malik",
		"Harry Styles",
		"Niall Horan",
		"Liam Payne",
		"Louis Tomlinson",
		"Adele",
		"Rihanna",
		"Ed Sheeran",
		"Drake",
		"Bruno Mars",
		"Billie Eilish",
		"Taylor Swift",
	}

	rand.NewSource(time.Now().UnixNano())

	for i := 0; i < 100; i++ {
		author := database.AuthorData{
			Id:    primitive.NewObjectID(),
			Title: artists[rand.Intn(len(artists))],
			Image: "https://picsum.photos/300",
		}

		authors.AddAuthor(author)
	}
}

func CreateAlbumsDatabase(db database.Database) {
	albums := db.Albums()
	authors := db.Authors()
	tracks := db.Tracks()

	rand.NewSource(time.Now().UnixNano())

	albumNames := []string{
		"Abbey Road",
		"Led Zeppelin IV",
		"A Night at the Opera",
		"Thriller",
		"Like a Virgin",
		"Goodbye Yellow Brick Road",
		"The Rise and Fall of Ziggy Stardust",
		"21",
		"1989",
		"The College Dropout",
		"Lemonade",
		"Anti",
		"The Marshall Mathers LP",
		"Views",
		"Beerbongs & Bentleys",
		"When We All Fall Asleep, Where Do We Go?",
		"÷ (Divide)",
		"Teenage Dream",
		"24K Magic",
		"Parachutes",
		"The Joshua Tree",
		"Sticky Fingers",
		"Nevermind",
		"The Dark Side of the Moon",
		"Who's Next",
		"Rumours",
		"L.A. Woman",
		"Pet Sounds",
		"Synchronicity",
		"Invisible Touch",
		"Machine Head",
		"Black Sabbath",
		"London Calling",
		"Rocket to Russia",
		"Never Mind the Bollocks",
		"Remain in Light",
		"Closer",
		"The Queen Is Dead",
		"OK Computer",
		"Disintegration",
		"Violator",
		"Rio",
		"Make It Big",
		"Faith",
		"Purple Rain",
		"Can't Slow Down",
		"She's So Unusual",
		"Private Dancer",
		"Whitney",
		"I Never Loved a Man the Way I Love You",
		"Songs in the Key of Life",
		"Live at the Apollo",
		"What's Going On",
		"Otis Blue: Otis Redding Sings Soul",
		"With the Soul of a Man",
		"Ella and Louis",
		"Lady Sings the Blues",
		"Satchmo at Symphony Hall",
		"Diana",
		"Control",
		"Laundry Service",
		"Confessions",
		"Stripped",
		"Never Say Never",
		"Under Construction",
		"Doggystyle",
		"The Chronic",
		"To Pimp a Butterfly",
		"2014 Forest Hills Drive",
		"Tha Carter III",
		"Culture",
		"Astroworld",
		"Invasion of Privacy",
		"The Pinkprint",
		"Live.Love.A$AP",
		"Swimming",
		"Awaken, My Love!",
		"Lust for Life",
		"Hopeless Fountain Kingdom",
		"Demi",
		"Rare",
		"Thank U, Next",
		"Purpose",
		"Made in the A.M.",
		"Starboy",
		"American Teen",
		"Bangerz",
		"Future Nostalgia",
		"Cuz I Love You",
		"Dirty Computer",
		"This Is Acting",
		"Expectations",
		"Mind of Mine",
		"Harry Styles",
		"Flicker",
		"LP1",
		"Walls",
		"25",
		"Loud",
		"x",
		"Scorpion",
		"Happier Than Ever",
		"Folklore",
	}

	for i := 0; i < 50; i++ {
		author := authors.GetRandomAuthor()

		var tracksArray []database.TrackData
		tracksInAlbum := rand.Intn(18)

		for j := 0; j < tracksInAlbum; j++ {

			newTrack := tracks.GetRandomTrackByAuthor(author.Title)

			tracksArray = append(tracksArray, newTrack)
		}

		album := database.AlbumData{
			Id:       primitive.NewObjectID(),
			Title:    albumNames[rand.Intn(len(albumNames))],
			Image:    "https://picsum.photos/300",
			Author:   author.Title,
			AuthorId: author.Id.Hex(),
			Items:    tracksArray,
		}

		albums.AddAlbum(album)
	}
}

func CreatePlaylistsDatabase(db database.Database) {
	tracks := db.Tracks()
	playlists := db.Playlists()

	rand.NewSource(time.Now().UnixNano())

	playlistNames := []string{
		"Best for Mood",
		"Top Rock Hits",
		"Back in the 90s",
		"Chill Vibes",
		"Summer Classics",
		"Hip-Hop Essentials",
		"Feel-Good Songs",
		"Workout Jams",
		"Indie Discoveries",
		"Pop Hits of the Decade",
		"Ultimate Party Mix",
		"Relaxing Acoustic",
		"Electronic Beats",
		"Romantic Dinner",
		"Greatest Hits Ever",
		"Rock Anthems",
		"Dance Party",
		"Mellow Moods",
		"Essential Jazz",
		"Old School R&B",
		"Epic Soundtracks",
		"Fresh Finds",
		"Top 40 Hits",
		"Classic Rock Legends",
		"Best of the 80s",
		"Modern Pop Hits",
		"Chillwave Essentials",
		"Blues Favorites",
		"Road Trip Tunes",
		"Country Classics",
		"Ambient Sounds",
		"Feel-Good Classics",
		"Morning Coffee Playlist",
		"Hits from the 2000s",
		"Deep House Vibes",
		"Singer-Songwriter Favorites",
		"Motivational Tracks",
		"Jazz Standards",
		"Golden Oldies",
		"Soulful Grooves",
		"Alternative Hits",
		"Guilty Pleasures",
		"Relaxing Piano Music",
		"Dancehall Mix",
		"Top Hits Today",
		"Acoustic Rock",
		"Best Chillout Tracks",
		"Power Ballads",
		"Retro Disco",
		"Indie Pop Hits",
		"Summer Vibes",
		"Rock 'n' Roll Classics",
		"Fresh Indie Releases",
		"Soft Rock Favorites",
		"Pop Classics",
		"Workout Motivation",
		"Classical Essentials",
		"Rising Stars",
		"Ultimate Road Trip",
		"Dance Classics",
		"Soul Classics",
		"Feel-Good Indie",
		"Blues Rock",
		"Top 10 Hits",
		"Lounge Music",
		"Acoustic Chill",
		"Best of Country Rock",
		"Electronic Chill",
		"Smooth Jazz",
		"Pop Rock Essentials",
		"Weekend Hits",
		"Feel-Good Rock",
		"Classical Chill",
		"Top Indie Tracks",
		"Golden Hits",
		"Best of R&B",
		"Ultimate Chillout",
		"Best of Dance",
		"Pop Favorites",
		"Greatest Jazz Hits",
		"Indie Rock Essentials",
		"Relaxing Guitar",
		"Epic Rock Anthems",
		"Classic Country",
		"Top 20 Hits",
		"Rock Classics",
		"Indie Hits",
		"Dance Floor Anthems",
		"Feel-Good Jazz",
		"Classic Pop",
		"Best Jazz Tracks",
		"Fresh Pop",
		"Morning Vibes",
		"Summer Party",
		"Acoustic Essentials",
		"Best 90s Rock",
		"Top EDM Tracks",
		"Ultimate Jazz Collection",
		"Country Favorites",
		"Chill Acoustic",
		"Top Rock Songs",
		"Greatest Country Hits",
		"Indie Chillout",
		"Retro Hits",
		"Essential Pop",
	}

	for i := 0; i < 50; i++ {

		var tracksArray []database.TrackData
		tracksInPlaylist := rand.Intn(18)

		for j := 0; j < tracksInPlaylist; j++ {

			newTrack := tracks.GetRandomTrack()

			tracksArray = append(tracksArray, newTrack)
		}

		playlist := database.PlaylistData{
			Id:    primitive.NewObjectID(),
			Title: playlistNames[rand.Intn(len(playlistNames))],
			Image: "https://picsum.photos/300",
			Items: tracksArray,
		}

		playlists.AddPlaylist(playlist)
	}
}

func CreateContentLines(db database.Database) {
	content_lines := db.ContentLines()
	albums := db.Albums()
	tracks := db.Tracks()
	playlists := db.Playlists()
	authors := db.Authors()
	content := db.Content()

	var authorsArray []database.ContentBlock
	for i := 0; i < 18; i++ {
		authorsArray = append(authorsArray, authors.GetRandomAuthor().ToContentBlock())
	}

	var tracksArray []database.ContentBlock
	for i := 0; i < 12; i++ {
		tracksArray = append(tracksArray, tracks.GetRandomTrack().ToContentBlock())
	}

	var playlistsArray []database.ContentBlock
	for i := 0; i < 6; i++ {
		playlistsArray = append(playlistsArray, playlists.GetRandomPlaylist().ToContentBlock())
	}

	var albumsArray []database.ContentBlock
	for i := 0; i < 18; i++ {
		albumsArray = append(albumsArray, albums.GetRandomAlbum().ToContentBlock())
	}

	authorsLine := database.ContentLine{
		Id:      primitive.NewObjectID(),
		Title:   "Best Authors",
		Type_of: "AUTHORS",
		Items:   authorsArray,
	}

	albumsLine := database.ContentLine{
		Id:      primitive.NewObjectID(),
		Title:   "Best Albums",
		Type_of: "ALBUMS",
		Items:   albumsArray,
	}

	tracksLine := database.ContentLine{
		Id:      primitive.NewObjectID(),
		Title:   "Best Tracks",
		Type_of: "TRACKS",
		Items:   tracksArray,
	}
	playlistsLine := database.ContentLine{
		Id:      primitive.NewObjectID(),
		Title:   "Best Playlists",
		Type_of: "PLAYLISTS",
		Items:   playlistsArray,
	}

	content_lines.AddContentLine(playlistsLine)
	content_lines.AddContentLine(authorsLine)
	content_lines.AddContentLine(albumsLine)
	content_lines.AddContentLine(tracksLine)

	contentLinesArray := []database.ContentLine{playlistsLine.ToShort(), authorsLine.ToShort(), albumsLine.ToShort(), tracksLine.ToShort()}
	newContent := database.ContentData{
		Title: "main",
		Items: contentLinesArray,
	}

	content.AddContent(newContent)
}
