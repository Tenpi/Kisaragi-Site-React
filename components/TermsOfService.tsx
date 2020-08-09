import React, {Component} from "react"
import tosImg from "../assets/icons/termsofservice.png"
import hinakoChibi from "../assets/images/hinakochibi.png"
import privacyImg from "../assets/icons/privacypolicy.png"
import mayukiChibi from "../assets/images/mayukichibi.png"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/termsofservice.less"
import func from "../structures/Functions"
interface Props {
    reRender: () => void
}

interface State {
    colorChange: boolean
    transitionOff: boolean
}

export default class TermsOfService extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            colorChange: false,
            transitionOff: false
        }
    }

    public handleScroll = () => {
        if ((window.scrollY || window.pageYOffset) > 1000) {
            document.title = "Privacy Policy"
            this.setState({
                colorChange: true
            })
        } else {
            document.title = "Terms Of Service"
            this.setState({
                colorChange: false
            })
        }
    }

    public componentDidMount = () => {
        document.title = "Terms Of Service"
        if (window.location.href.includes("#privacy")) {
            window.location.href = "#privacy"
        }
        setTimeout(() => {
            this.setState({
                transitionOff: true
            })
        }, 500)
        window.addEventListener("scroll", this.handleScroll)
    }

    public componentWillUnmount = () => {
        window.removeEventListener("scroll", this.handleScroll)
    }

    public render() {
        return (
            <>
            <Navbar/>
            <main className={(this.state.colorChange ? "tos-container tos-container-blue" : "tos-container") + (this.state.transitionOff ? "" : " tos-transition")}>
                <section className="terms-of-service" id="terms">
                    <div className="tos-vertical">
                        <div className="tos-header-container">
                            <div className="tos-header-text-container">
                                <img src={tosImg} width="80" height="74" className="tos-img"/>
                                <h1 className="tos-header">Terms Of Service</h1>
                            </div>
                            <img src={hinakoChibi} width="134" height="216" className="hinako"/>
                        </div>
                        <hr className="tos-hr"/>
                        <p className="tos-paragraph">These are the terms of service for the discord bot Kisaragi. The bot has no relation to Discord, it is only the service that it is used on.</p>
                        <h3 className="tos-title">Bot Spam and Misuse</h3>
                        <details className="tos-details" open>
                            <summary ref={func.animateSummary} className="tos-list-title"><span>Content</span></summary>
                            <p className="tos-list-detail">Everything posted by the bot falls under your responsibility, not the bot or developer. If the bot posts something "questionable" it's because of the input you gave it. I do make an effort to filter such content, but it's impossible to filter everything on the internet.</p>
                        </details>
                        <details className="tos-details" open>
                            <summary ref={func.animateSummary} className="tos-list-title"><span>API Spam</span></summary>
                            <p className="tos-list-detail">Don't use this bot to spam Discord's API (or any API it uses).</p>
                        </details>
                        <details className="tos-details" open>
                            <summary ref={func.animateSummary} className="tos-list-title"><span>Global Chat</span></summary>
                            <p className="tos-list-detail">Don't post anything inappropriate, offensive, or spam. This is a public chat visible to everyone who enables it.</p>
                        </details>
                        <details className="tos-details" open>
                            <summary ref={func.animateSummary} className="tos-list-title"><span>Oauth2</span></summary>
                            <p className="tos-list-detail">Don't abuse oauth2 commands or share oauth2 links created by the bot.</p>
                        </details>
                        <details className="tos-details" open>
                            <summary ref={func.animateSummary} className="tos-list-title"><span>Abusing Bugs</span></summary>
                            <p className="tos-list-detail">This bot is a beta version, and there could be bugs that crash the bot. Please report these bugs with the <span className="command">feedback</span> command.</p>
                        </details>
                        <h3 className="tos-title">Punishment</h3>
                        <p className="tos-paragraph">Violating the TOS could result in you or your entire guild getting blacklisted (blocked from using any commands and blocked from adding the bot to a server).</p>
                        <h3 className="tos-title">Appeal</h3>
                        <p className="tos-paragraph">There is no method of appealing yet, because I don't think it's necessary.</p>
                    </div>
                </section>

                <section className="privacy-policy" id="privacy">
                    <div className="privacy-vertical">
                        <div className="privacy-header-container">
                            <div className="privacy-header-text-container">
                                <img src={privacyImg} width="72" height="89" className="blue-select tos-img"/>
                                <h1 className="privacy-header blue-select">Privacy Policy</h1>
                            </div>
                            <img src={mayukiChibi} width="172" height="187" className="blue-select mayuki"/>
                        </div>
                        <hr className="privacy-hr blue-select"/>
                        <p className="privacy-paragraph blue-select">By adding Kisaragi to your server, or by authorizing her with oauth2, every member in the server automatically agrees to this privacy policy. Otherwise, kick the bot or leave the server. Your information is not shared.</p>
                        <h3 className="privacy-title blue-select">Public Information</h3>
                        <details className="privacy-details" open>
                            <summary ref={func.animateSummary} className="privacy-list-title"><span className="blue-select">Guilds</span></summary>
                            <p className="privacy-list-detail blue-select">The bot collects public information of every guild that she is on, including but not limited to: guild name, members, roles, channels, and emojis. This is required for bot functionality.</p>
                        </details>
                        <h3 className="privacy-title blue-select">Private Information (Oauth2 Only)</h3>
                        <details className="privacy-details" open>
                            <summary ref={func.animateSummary} className="privacy-list-title"><span className="blue-select">Email Address</span></summary>
                            <p className="privacy-list-detail blue-select">Your discord email address is used to send you email from the <span className="command blue-select">email</span> command. This is to verify that the address belongs to you, and also to protect your privacy by not having to write your email when invoking the command.</p>
                        </details>
                        <details className="privacy-details" open>
                            <summary ref={func.animateSummary} className="privacy-list-title"><span className="blue-select">Connections</span></summary>
                            <p className="privacy-list-detail blue-select">Access to your connections is required to verify that a social media account belongs to you (such as twitter).</p>
                        </details>
                        <details className="privacy-details" open>
                            <summary ref={func.animateSummary} className="privacy-list-title"><span className="blue-select">Account Access</span></summary>
                            <p className="privacy-list-detail blue-select">If you authenticate with a social media account, it gives the bot public read and write access over your account. The bot only does actions on your behalf.</p>
                        </details>
                        <details className="privacy-details" open>
                            <summary ref={func.animateSummary} className="privacy-list-title"><span className="blue-select">Joining Servers</span></summary>
                            <p className="privacy-list-detail blue-select">Any server admin will be able to add you onto their server with the <span className="command blue-select">add</span> command as long as they know your user id or tag. You are always notified when this occurs.</p>
                        </details>
                        <h3 className="privacy-title blue-select">Delete Information</h3>
                        <details className="privacy-details" open>
                            <summary ref={func.animateSummary} className="privacy-list-title"><span className="blue-select">Data Deletion</span></summary>
                            <p className="privacy-list-detail blue-select">All oauth commands have an option to revoke your token. To revoke your twitter token you need to manually click on "revoke access" in your application settings. To delete all guild data, just remove the bot from your server.</p>
                        </details>
                        <details className="privacy-details" open>
                            <summary ref={func.animateSummary} className="privacy-list-title"><span className="blue-select">Account Deletion</span></summary>
                            <p className="privacy-list-detail blue-select">If you delete your discord account all user-specific settings and oauth2 data on your account is deleted.</p>
                        </details>
                    </div>
                </section>
            </main>
            <Footer reRender={this.props.reRender}/>
            </>
        )
    }
}