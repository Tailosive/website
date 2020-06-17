import * as React from 'react'
import { Hero, Title, Section, Icon, Button } from 'rbx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../../components/Navbar'

const bingoCards = [
  {
    id: 1,
    title: 'macOS 10.16 is mainly bug fixes'
  },
  {
    id: 2,
    title: 'One more thing...'
  },
  {
    id: 3,
    title: 'The best ... yet'
  },
  {
    id: 4,
    title: 'Someone presents from home'
  },
  {
    id: 5,
    title: 'Craig doesn\'t show up'
  },
  {
    id: 6,
    title: 'Crack marketing team field trip'
  },
  {
    id: 7,
    title: 'Home Screen Widgets in iOS 14'
  },
  {
    id: 8,
    title: 'ARM Macs'
  },
  {
    id: 9,
    title: 'Bezelless iMac'
  },
  {
    id: 10,
    title: 'Dark Sky Integration'
  },
  {
    id: 11,
    title: 'Shazam Integration'
  },
  {
    id: 12,
    title: 'Swift 5.3'
  },
  {
    id: 13,
    title: 'Good Morning'
  },
  {
    id: 14,
    title: 'Performance'
  },
  {
    id: 15,
    title: 'iOS 14 has little changes'
  },
  {
    id: 16,
    title: 'Subscriptions bundle'
  },
  {
    id: 17,
    title: 'MacID/FaceID is real'
  },
  {
    id: 18,
    title: 'Boring 3rd party demo'
  },
  {
    id: 19,
    title: 'No hardware revealed'
  },
  {
    id: 20,
    title: 'More iCloud free tier storage' // you wish...
  },
  {
    id: 21,
    title: 'MORE SF SYMBOLS'
  },
  {
    id: 22,
    title: 'Xcode for iPad'
  },
  {
    id: 23,
    title: 'New design language'
  },
  {
    id: 24,
    title: 'SwiftUI 2.0'
  },
  {
    id: 25,
    title: 'AR Glasses'
  }
]
// uwu, bingo
const Bingo = () => {
  const [slots, setSlots] = React.useState<any>([])
  return (
    <>
    {/* // <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}> */}
      <Hero className='tailosive-hero' size='medium'>
        <Hero.Head>
          <Navbar />
        </Hero.Head>
        <Hero.Body style={{ padding: 0, paddingTop: '1rem', marginTop: '1.5rem' }}>
          <Title className='tailosive-title' style={{ paddingTop: '20px' }}>Bingo</Title>
          <Title subtitle={true} className='tailosive-subtitle'>WWDC20 Edition</Title>
        </Hero.Body>
      </Hero>
      <div className='bingo-flex'>
        <Section className='tailosive-section' style={{ paddingRight: 0 }}>
          <ol >
            {bingoCards.map((bingo) => (
              <li key={bingo.id}>{slots.includes(bingo.id) ? <del>{bingo.title}</del> : bingo.title}</li>
            ))}
          </ol>
          <Button style={{ fontWeight: '800' }} onClick={() => window.location.href = 'https://discord.gg/tailosive'}>SHARE WITH TAILOSIVE DISCORD <Icon style={{ marginLeft: '4px' }}><FontAwesomeIcon icon={faArrowAltCircleRight} /></Icon></Button>
        </Section>
        <Section style={{ flex: '1' }} className='tailosive-section'>
          {/*  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gridTemplateRows: '1fr 1fr 1fr 1fr 1fr', */}
          <div style={{ display: 'grid', height: '100%', gap: '10px', gridTemplateAreas: `"div div div div div" "div div div div div" "div div div div div" "div div div div div" "div div div div div"` }}>
            {bingoCards.map((bingo) => (
              <div key={bingo.id} onClick={() => !slots.includes(bingo.id) ? setSlots([bingo.id, ...slots]) : setSlots(slots.filter((slot: number) => slot !== bingo.id))} className={`outer ${slots.includes(bingo.id) && 'activeBingo'}`}> {/* gulp */}
                <small className='inner'>{bingo.id}</small>
              </div>
            ))}
          </div>
        </Section>
      </div>
      <Section className='tailosive-section' style={{ marginTop: 'auto' }}>
        <h4><strong>Tailosive</strong></h4>
        <small>Copyright © 2020 Tailosive Inc.</small>
        <p>
          <strong>Developed</strong> by <a className='has-text-link' href='https://atiktech.co'>ATIK_TECH</a>.
        </p>
      </Section>
    {/* // </div> */}
    </>
  )
}

export default Bingo
