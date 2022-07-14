function ToPlay(request, response) {
    const playlist = [
        {artist: "Major RD", music: "https://d208.d2mefast.net/tb/9/4c/terrordosbeats_major_rd_sidoka_sequestro_clipe_oficial_mp3_48482.mp3"}
    ]

    response.json({
        artist: playlist.artist
    })
}

export default ToPlay;