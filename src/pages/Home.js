
import videoslist from '../utilities/songs'


const Home = () => {

    window.localStorage.setItem('videolist', videoslist)

    return <div>
      <div className="row">
           
                {videoslist.map((video) => {
                    return <div className="col-4 mb-4"><iframe className="p5" width="100%" height="315" src={video.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
                })}

            </div>
      </div>
}

export default Home;