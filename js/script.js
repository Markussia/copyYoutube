let test = document.querySelector('.video-section')


async function getVideoJson(){
	let response = await fetch('json/video.json')
	let content = await response.json()
	content = content.splice(0 , 10)

	let key

	for(key in content){
		test.innerHTML += `<a href="${content[key].linkVideo}" class="video-yt">
                <div class="img-video">
                    <img src="${content[key].imgVideo}" alt="">
                </div>
                <div class="description">
                    <div class="avatar">
                        <img src="${content[key].avatarCreateYt}" alt="">
                    </div>
                    <div class="text-description">
                        <div class="name-video">${content[key].videoName}</div>
                        <div class="info-video">
                            <div class="name-create">${content[key].name}</div>
                        <div class="views-and-time-create">${content[key].viewes} ${content[key].timeLast}</div>
                        </div>
                    </div>
                </div>
            </a>`
	}	
}

getVideoJson()