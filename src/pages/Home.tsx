// @ts-nocheck
import * as React from 'react'
import { Hero, Title, Section, Icon, Button } from 'rbx'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faTwitch, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'
import Countdown from 'react-countdown'
import moment from 'moment'
// wtf typescript, _ITS A PNG_
// ah yes, statically typed images
// 10/10 iq typescript

// 10/10 iq typescript

import gimmeabreaktee from '../images/shirts/gimmeabreaktee.png'
import bubblyss from '../images/shirts/bubblyss.png'
import gamingtee from '../images/shirts/gamingtee.png'
import iheartaipodstee from '../images/shirts/iheartaipodstee.png'
import usbcss from '../images/shirts/usbcss.png'
import noneedsticker from '../images/shirts/noneedsticker.png'

const channels = [
  {
    name: 'Tech',
    color: '#13A2FA',
    social: [
      {
        name: 'youtube',
        icon: faYoutube,
        link: 'https://youtube.com/channel/UCa962e5dqRMO1nUldwaaRMw'
      },
      {
        name: 'twitch',
        icon: faTwitch,
        link: 'https://twitch.tv/tailosivetech'
      },
      {
        name: 'twitter',
        icon: faTwitter,
        link: 'https://twitter.com/tailosivetech'
      }
    ]
  },
  {
    name: 'EV',
    color: '#6D7278',
    social: [
      {
        name: 'youtube',
        icon: faYoutube,
        link: 'https://youtube.com/channel/UCa962e5dqRMO1nUldwaaRMw'
      },
      {
        name: 'twitch',
        icon: faTwitch,
        link: 'https://twitch.tv/tailosivetech'
      },
      {
        name: 'twitter',
        icon: faTwitter,
        link: 'https://twitter.com/tailosivetech'
      }
    ]
  },
  {
    name: 'Talks',
    color: '#DF43FC',
    social: [
      {
        name: 'youtube',
        icon: faYoutube,
        link: 'https://youtube.com/channel/UCa962e5dqRMO1nUldwaaRMw'
      },
      {
        name: 'twitch',
        icon: faTwitch,
        link: 'https://twitch.tv/tailosivetech'
      },
      {
        name: 'twitter',
        icon: faTwitter,
        link: 'https://twitter.com/tailosivetech'
      }
    ]
  },
  {
    name: 'Gaming',
    color: '#F44A42',
    social: [
      {
        name: 'youtube',
        icon: faYoutube,
        link: 'https://youtube.com/channel/UCa962e5dqRMO1nUldwaaRMw'
      },
      {
        name: 'twitch',
        icon: faTwitch,
        link: 'https://twitch.tv/tailosivetech'
      },
      {
        name: 'twitter',
        icon: faTwitter,
        link: 'https://twitter.com/tailosivetech'
      }
    ]
  },
  {
    name: 'Movies',
    color: '#FBAB00',
    social: [
      {
        name: 'youtube',
        icon: faYoutube,
        link: 'https://youtube.com/channel/UCa962e5dqRMO1nUldwaaRMw'
      },
      {
        name: 'twitch',
        icon: faTwitch,
        link: 'https://twitch.tv/tailosivetech'
      },
      {
        name: 'twitter',
        icon: faTwitter,
        link: 'https://twitter.com/tailosivetech'
      }
    ]
  },
  {
    name: 'Music',
    color: '#2CFB79',
    social: [
      {
        name: 'youtube',
        icon: faYoutube,
        link: 'https://youtube.com/channel/UCa962e5dqRMO1nUldwaaRMw'
      },
      {
        name: 'twitch',
        icon: faTwitch,
        link: 'https://twitch.tv/tailosivetech'
      },
      {
        name: 'twitter',
        icon: faTwitter,
        link: 'https://twitter.com/tailosivetech'
      }
    ]
  },
  {
    name: 'Food',
    color: '#F2863A',
    social: [
      {
        name: 'youtube',
        icon: faYoutube,
        link: 'https://youtube.com/channel/UCa962e5dqRMO1nUldwaaRMw'
      },
      {
        name: 'twitch',
        icon: faTwitch,
        link: 'https://twitch.tv/tailosivetech'
      },
      {
        name: 'twitter',
        icon: faTwitter,
        link: 'https://twitter.com/tailosivetech'
      }
    ]
  },
  {
    name: 'Skits',
    color: '#30317F',
    social: [
      {
        name: 'youtube',
        icon: faYoutube,
        link: 'https://youtube.com/channel/UCa962e5dqRMO1nUldwaaRMw'
      },
      {
        name: 'twitch',
        icon: faTwitch,
        link: 'https://twitch.tv/tailosivetech'
      },
      {
        name: 'twitter',
        icon: faTwitter,
        link: 'https://twitter.com/tailosivetech'
      }
    ]
  }
]

const merchandise = [
  {
    url: 'https://teespring.com/new-gimme-a-break?tsmac=store&tsmic=tailosive-merchandise&pid=2',
    img: gimmeabreaktee
  },
  {
    url: 'https://teespring.com/bubbly-tailosive-t?tsmac=store&tsmic=tailosive-merchandise&pid=212&cid=5820',
    img: bubblyss
  },
  {
    url: 'https://teespring.com/tailosive-gaming-t?tsmac=store&tsmic=tailosive-merchandise&pid=87&cid=2325',
    img: gamingtee
  },
  {
    url: 'https://teespring.com/i-love-airpods?tsmac=store&tsmic=tailosive-merchandise&pid=76',
    img: iheartaipodstee
  },
  {
    url: 'https://teespring.com/usbc-college-design?tsmac=store&tsmic=tailosive-merchandise&pid=212&cid=5819',
    img: usbcss
  },
  {
    url: 'https://teespring.com/no-need-sticker?cid=103544&page=1&pid=794&tsmac=store&tsmic=tailosive-merchandise',
    img: noneedsticker
  }
]

const renderer = ({ days, hours, minutes, seconds, completed }: { days: number, hours: number, minutes: number, seconds: number, completed: boolean }) => {
  if (completed) {
    // Render a completed state
    return <><small>WWDC HAS STARTED!</small><br />WATCH NOW AT <a href='https://apple.com/apple-events'>apple.com</a></>
  } else {
    // Render a countdown
    return <span>{days > 0 && `${days}d`} {hours > 0 && `${hours}h`} {minutes > 0 && `${minutes}m`} {seconds > 0 && `${seconds}s`}</span>
  }
}

const Home = () => {
  const history = useHistory()
  return (
    <>
      <Hero className='tailosive-hero' size='medium'>
        <Hero.Head>
          <Navbar />
        </Hero.Head>
        <Hero.Body style={{ padding: 0, paddingTop: '1rem', marginTop: '1.5rem' }}>
          <div style={{ backgroundColor: 'rgb(52, 58, 64)', borderRadius: 15, padding: '2rem', marginBottom: '2%' }}>
            <div style={{ paddingBottom: '15px' }}>
              <h1 style={{ width: 'auto' }}><strong>WWDC20</strong></h1>
              <small style={{ width: 'auto' }}>WWDC20 brings together millions of Apple developers around the world</small>
              <Title className='tailosive-title' style={{ width: 'auto', paddingTop: 0, marginBottom: 0 }}><Countdown renderer={renderer} date={new Date('2020-06-22T17:00:00Z')} /></Title>
              <p>Starts at: {moment('2020-06-22T17:00:00Z').format('ddd DD, hA')}</p>
            </div>
            <Button style={{ fontWeight: '800' }} onClick={() => window.location.href = 'https://discord.gg/tailosive'}>JOIN THE DISCORD <Icon style={{ marginLeft: '4px' }}><FontAwesomeIcon icon={faArrowAltCircleRight} /></Icon></Button>
            <Button style={{ fontWeight: '800', marginLeft: '10px' }} onClick={() => history.push('/bingo')}>BINGO <Icon style={{ marginLeft: '4px' }}><FontAwesomeIcon icon={faArrowAltCircleRight} /></Icon></Button>
          </div>
          <Title className='tailosive-title' style={{ paddingTop: '20px' }}>Creating content for everyone.</Title>
          <Title subtitle={true} className='tailosive-subtitle'>The Tailosive Network aims to create a multi-channel, family friendly network using multiple platforms across the internet.</Title>
        </Hero.Body>
      </Hero>
      <Section className='tailosive-section' style={{ backgroundColor: '#343a40', marginTop: '30px' }}>
        <h4 style={{ fontSize: '25px' }}><strong>Our Channels</strong></h4>
        <ul className='tailosive-ul'>
          {channels.map(channel => (
            <li key={channel.name} style={{ backgroundColor: channel.color }}>
              <h4><strong>{channel.name}</strong></h4>
              {channel.social.map(social => (
                <Icon key={social.name}>
                  <FontAwesomeIcon icon={social.icon} />
                </Icon>
              ))}
            </li>
          ))}
        </ul>
      </Section>
      <Section className='tailosive-section' style={{ textAlign: 'center', margin: '20px' }}>
        <Icon style={{ display: 'inline' }}>
          <FontAwesomeIcon icon={faDiscord} size='3x'/>
        </Icon>
        <h4 style={{ fontSize: '25px' }}><strong>Tailosive Discord</strong></h4>
        <p style={{ marginBottom: '15px' }}><small style={{ fontSize: '15px' }}>Join our growing community on discord!</small></p>
        <Button style={{ fontWeight: '800' }} rounded onClick={() => window.location.href = 'https://discord.gg/tailosive'}>JOIN US <Icon style={{ marginLeft: '4px' }}><FontAwesomeIcon icon={faArrowAltCircleRight} /></Icon></Button>
      </Section>
      <Section className='tailosive-section' style={{ backgroundColor: '#343a40' }}>
        <h4 style={{ fontSize: '25px' }}><strong>Merchandise</strong></h4>
        <ul className='tailosive-ul tailosive-shirts'>
          {merchandise.map(merch => (
            <li key={merch.url}>
              <a href={merch.url}>
                <img src={merch.img} alt='merch' />
              </a>
            </li>
          ))}
        </ul>
      </Section>
      <Section className='tailosive-section'>
        <h4><strong>Tailosive</strong></h4>
        <small>Copyright © 2020 Tailosive Inc.</small>
        <p>
          <strong>Developed</strong> by <a className='has-text-link' href='https://atiktech.co'>ATIK_TECH</a>.
        </p>
      </Section>
    </>
  )
}

export default Home
