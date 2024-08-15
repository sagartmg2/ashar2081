import { useState } from "react"

const GoogleTabs = () => {
    console.log("render- google tabs")

    const [currentTab, setCurrenTab] = useState("all")

    // setCurrenTab("images")

    const changeToAll = () => {
        setCurrenTab("all")
    }

    const changeToImages = () => {
        setCurrenTab("images")
    }

    const changeToVidoes = () => {
        setCurrenTab("videos")
    }

    const changeToOthers = () => {
        setCurrenTab("others")
    }

    return (
        <>
            <p>
                current tab: {currentTab} {"  <------  change this on click of below tabs"}{" "}
            </p>
            <ul>
                <li onClick={changeToAll}>all</li>
                <li onClick={changeToImages}>images</li>
                <li
                    onClick={() => {
                        setCurrenTab("videos")
                    }}
                >
                    videos
                </li>
                <li
                    onClick={() => {
                        setCurrenTab("others")
                    }}
                >
                    others
                </li>
            </ul>
            <hr />
            {currentTab === "all" && (
                <div>
                    <h2>All </h2>
                    <p>
                        all Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur necessitatibus
                        dolor repellendus quisquam voluptatum perferendis vitae sunt recusandae, repudiandae corrupti
                        praesentium sint voluptate. Esse voluptatem facilis deserunt molestias voluptates.
                    </p>
                    <p>
                        all Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur necessitatibus
                        dolor repellendus quisquam voluptatum perferendis vitae sunt recusandae, repudiandae corrupti
                        praesentium sint voluptate. Esse voluptatem facilis deserunt molestias voluptates.
                    </p>
                </div>
            )}

            {currentTab == "images" && (
                <div>
                    <h2>images</h2>
                    <p>
                        images Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur necessitatibus
                        dolor repellendus quisquam voluptatum perferendis vitae sunt recusandae, repudiandae corrupti
                        praesentium sint voluptate. Esse voluptatem facilis deserunt molestias voluptates.
                    </p>
                    <p>
                        images Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione tenetur necessitatibus
                        dolor repellendus quisquam voluptatum perferendis vitae sunt recusandae, repudiandae corrupti
                        praesentium sint voluptate. Esse voluptatem facilis deserunt molestias voluptates.
                    </p>
                </div>
            )}
        </>
    )
}

export default GoogleTabs
