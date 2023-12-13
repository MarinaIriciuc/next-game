import SocialMediaIcons from "@/components/SocialMediaIcons";

export default function Footer(){
    return (
        <>
            <footer className="grid grid-cols-1 bg-primary-blue py-5 text-white">
                <div className="container-fluid flex justify-between">
                    <SocialMediaIcons/>
                    <p className="text-[14px]">© 2023 copyright all right reserved</p>
                </div>
            </footer>
        </>
    )
}