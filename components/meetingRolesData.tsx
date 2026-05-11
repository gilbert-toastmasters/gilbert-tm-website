import { ReactNode } from 'react'

export type Section = { label?: string; body: ReactNode }
export type Role = {
  key: string
  title: string
  teaser: string
  duration?: string
  sections: Section[]
}

export const ROLES: Role[] = [
  {
    key: 'toastmaster',
    title: 'Toastmaster of the Day',
    teaser: 'Run the first half. Host, traffic controller, mover of the meeting.',
    sections: [
      {
        body: "You run the first half of the meeting. The General Evaluator takes the second half. You're the host, the traffic controller, and the person responsible for making sure everything moves.",
      },
      {
        body: "As soon as you're assigned, reach out to the VPE to confirm you received the assignment. Then get to work.",
      },
      {
        label: 'Before the meeting',
        body: (
          <>
            <p>Contact the speakers and the Table Topics Master. Confirm they&apos;ll be at the meeting. You can find contact information on the 4-week schedule.</p>
            <p className="mt-3">Collect details from each speaker and send one email to the VPE by Wednesday at 7pm. For each speaker, the VPE needs:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Speaker&apos;s name</li>
              <li>Path name (exact name as it appears in Pathways)</li>
              <li>Project title (exact name)</li>
              <li>Speech title</li>
              <li>Whether they need a projector (yes or no)</li>
            </ul>
            <p className="mt-3">If a speaker needs a projector, email the Sergeant at Arms by Wednesday evening and remind the speaker to bring their own laptop.</p>
            <p className="mt-3">Getting the exact path and project names matters. It&apos;s how the VPE updates the club&apos;s records accurately.</p>
            <p className="mt-3">If a speaker can&apos;t make it, it&apos;s their responsibility to find a replacement and let you know.</p>
            <p className="mt-3">Start this process by the weekend before your meeting. You may need to follow up more than once.</p>
          </>
        ),
      },
      {
        label: 'At the meeting',
        body: (
          <>
            <p>Huddle with the General Evaluator and Table Topics Master before the meeting starts. Confirm the lineup. Check that all functionaries are present. If someone is missing, the GE needs to recruit a fill-in before things get going.</p>
            <p className="mt-3">The President will introduce you. From there, you&apos;re running things.</p>
            <p className="mt-3">Follow the agenda. Make a few comments about the meeting theme if you&apos;d like, but keep them brief. Your job is to move the meeting along and give time to the people who are there to speak. The Table Topics Master should wrap up by about 7:30 PM.</p>
            <p className="mt-3">Introduce the functionaries, the Table Topics Master, each evaluator, and each speaker. Don&apos;t just read names and titles. Give the audience a reason to pay attention. A brief, engaging setup makes a difference.</p>
            <p className="mt-3">After each speaker finishes, ask the Timer for one timed minute so members can complete their written evaluations.</p>
            <p className="mt-3">After an Icebreaker speech, lead the club in a standing ovation. Every time. That&apos;s how Gilbert does it.</p>
            <p className="mt-3">When all speakers are done, ask for the Timer&apos;s report. Then ask members to vote and hold their ballots.</p>
            <p className="mt-3">Turn the meeting over to the General Evaluator. You&apos;re done for the evening.</p>
          </>
        ),
      },
      {
        label: 'Common mistakes for first-time Toastmasters',
        body: "Not following the agenda. Not reaching out to speakers early enough, which means you don't know if you have three speakers until it's too late. Taking up too much meeting time with your own comments. And not checking in with the GE and Table Topics Master before the meeting starts.",
      },
      {
        label: 'Guiding principle',
        body: 'Give everyone else a chance to speak. Your job is to make that happen, not to fill the silence yourself.',
      },
    ],
  },
  {
    key: 'general-evaluator',
    title: 'General Evaluator',
    teaser: 'Run the second half. Wrangle the functionaries. Present the awards.',
    sections: [
      {
        body: "You run the second half of the meeting. The Toastmaster handles the first half and then introduces you. From that point, you're in charge.",
      },
      {
        label: 'Before the meeting',
        body: (
          <>
            <p>Email all functionaries as soon as you receive the schedule from the VPE. Aim to get your email out on Sunday. You&apos;re contacting everyone except the Toastmaster, Table Topics Master, and speakers. Ask each person to confirm they&apos;ll fulfill their role or find a substitute.</p>
            <p className="mt-3">Emphasize that if they can&apos;t make it, it&apos;s their responsibility to find a replacement and notify both you and the VPE.</p>
            <p className="mt-3">If you don&apos;t hear back by Monday, follow up. Get on the phone Tuesday night for anyone who hasn&apos;t responded to email. By Tuesday, if you&apos;re still missing functionaries, send an email to the full club asking for volunteers.</p>
            <p className="mt-3">Send the completed lineup to the VPE by Wednesday evening so they can prepare the agenda. Send a copy to the Toastmaster and Table Topics Master so they can plan accordingly.</p>
            <p className="mt-3">Before the meeting, have the President sign a copy of the Vickie Tresiak Spirit Award. You&apos;ll be presenting this later in the meeting.</p>
          </>
        ),
      },
      {
        label: 'At the meeting',
        body: (
          <>
            <p>Huddle with the Toastmaster and Table Topics Master around 6:45. Review the lineup, discuss any changes. The Table Topics Master will want to know who&apos;s available for Table Topics. Check that all your functionaries are present. If someone is missing, call out for a substitute immediately. Your revised lineup should be set by about 6:55. Pass any changes to the Toastmaster and Table Topics Master.</p>
            <p className="mt-3">There&apos;s nothing worse than the Toastmaster calling on a functionary who isn&apos;t in the room. That&apos;s on you to prevent.</p>
          </>
        ),
      },
      {
        label: 'Running the second half',
        body: (
          <>
            <p>The Toastmaster will introduce you. From here, you manage the evaluation segment.</p>
            <p className="mt-3">Introduce each evaluator. Mention the title of the speech they&apos;re evaluating. After all evaluations are complete, ask for the Timer&apos;s report. Then ask members to vote on their phones for Best Evaluator.</p>
            <p className="mt-3">Call for functionary reports. Follow the meeting agenda. While functionaries deliver their reports, the Joke Master performs, and the Word of Wisdom is shared, the votes are being counted in the background.</p>
            <p className="mt-3">Present the Vickie Tresiak Spirit Award first. This is your pick. Choose the member who went beyond the call of duty to help make the meeting successful. Vickie Tresiak was an enthusiastic member of Gilbert Toastmasters who passed away. This award honors her spirit.</p>
            <p className="mt-3">Then present the remaining awards when they&apos;re brought to you. Announce them in this order: Best Table Topics, Best Evaluator, Best Speaker.</p>
            <p className="mt-3">If time allows, give your evaluation of the meeting. This isn&apos;t a summary of what happened. It&apos;s feedback. Were the evaluations useful? Did the meeting flow well? What could have been done better? Be specific.</p>
            <p className="mt-3">Turn the meeting over to the President. You&apos;re done.</p>
          </>
        ),
      },
      {
        label: 'Common mistakes',
        body: "Not emailing functionaries early enough. Not following up when people don't respond. Showing up without a complete lineup. And not huddling with the Toastmaster and Table Topics Master before the meeting starts. The juggling happens right up until meeting time. That's the job.",
      },
    ],
  },
  {
    key: 'table-topics-master',
    title: 'Table Topics Master',
    teaser: 'Run the impromptu segment. Give everyone without a role a chance to speak.',
    sections: [
      {
        body: 'You run the impromptu speaking segment of the meeting. Your job is to give every member without a major role a chance to speak.',
      },
      {
        label: 'Before the meeting',
        body: (
          <>
            <p>Choose a theme and prepare 10 to 12 questions. Send an email to the club in advance so members know what the theme is. Keep your questions short and focused. Have fun with it.</p>
            <p className="mt-3">Huddle with the Toastmaster and General Evaluator about 15 minutes before the meeting. Decide together who in attendance should be assigned Table Topics. Eliminate anyone with a major function: Toastmaster, General Evaluator, speakers, and evaluators. Your goal is to give everyone without a role a chance to speak.</p>
            <p className="mt-3">If attendance is low and you need more speakers, start pulling from members with lesser functions like Word of the Day or Grammarian.</p>
          </>
        ),
      },
      {
        label: 'During the meeting',
        body: (
          <>
            <p>The Toastmaster will introduce you. Briefly explain what Table Topics is and how it works. This is especially important for guests in the room. Keep your opening comments to about a minute. One of the most common mistakes Table Topics Masters make is warming up the audience too long, which cuts into the time participants have to speak.</p>
            <p className="mt-3">Call on speakers one at a time. Give them the question clearly and let them go.</p>
            <p className="mt-3">Plan to ask your last question by 7:30 PM. When Table Topics wraps up, ask for the Timer&apos;s report, then ask members to vote on their phones for Best Table Topics.</p>
          </>
        ),
      },
    ],
  },
  {
    key: 'evaluator',
    title: 'Evaluator',
    teaser: 'Give a speaker feedback in 2 to 3 minutes.',
    duration: '2:00 – 3:30 (3:00 target)',
    sections: [
      { body: "You give a prepared speech evaluation. The goal is honest, useful feedback that helps the speaker grow." },
      {
        label: 'Timing',
        body: 'Evaluations run 2 to 3:30 minutes. Green at 2:00, yellow at 2:30, red at 3:00, disqualified for awards at 3:30.',
      },
      {
        label: 'Full guide coming',
        body: 'A standalone Evaluator guide will live at /evaluator (in progress).',
      },
    ],
  },
  {
    key: 'word-of-the-day',
    title: 'Word of the Day',
    teaser: 'Pick a word. Everyone tries to use it.',
    duration: 'Report: 60s max',
    sections: [
      { body: "You pick a word. Everyone tries to use it. It's simple and it works." },
      {
        label: 'Choosing the word',
        body: "Pick something that adds to people's vocabulary without making them reach for a dictionary mid-sentence. It should be a real word people could actually use in conversation or at work, not something archaic or obscure. Pick a word you'd enjoy hearing repeated. Examples: persuade, articulate, ephemeral, visionary.",
      },
      {
        label: 'Before the meeting',
        body: 'Write the word in large letters on a piece of paper and tape it where the room can see it.',
      },
      {
        label: 'During the meeting',
        body: 'When the Toastmaster calls on you, announce the word, define it, and use it in a sentence. Let everyone know they should work it into their remarks. Keep a tally of who uses it.',
      },
      {
        label: 'Reporting',
        body: "When the General Evaluator calls on you, share your report. Note who used the word and remind those who didn't that there's a 5-cent fine for skipping it. Guests are exempt.",
      },
    ],
  },
  {
    key: 'ah-counter',
    title: 'Ah Counter',
    teaser: 'Listen for filler words. Click. Build awareness.',
    duration: 'Report: 60s max',
    sections: [
      { body: 'You listen for filler words: "um," "ah," "you know," "so," "like," and repeated sounds like "I, I" or "well, well."' },
      {
        label: 'Before the meeting',
        body: 'Pick up the clicker from the kitty. This is your main tool.',
      },
      {
        label: 'During the meeting',
        body: (
          <>
            <p>When the Toastmaster introduces you, briefly explain your role. Demonstrate the clicker so everyone knows what it sounds like. Let them know about the fine system: 5 cents per filler word, up to 25 cents maximum. Guests are exempt.</p>
            <p className="mt-3">Use the clicker during Table Topics, functionary reports, and general remarks. Don&apos;t use it during prepared speeches or when guests are speaking.</p>
            <p className="mt-3">If someone reacts to the clicker, that&apos;s fine. The goal isn&apos;t to embarrass anyone. It&apos;s to build awareness over time. Encourage speakers to keep going without acknowledging the click.</p>
          </>
        ),
      },
      {
        label: 'Reporting',
        body: "When called on by the General Evaluator, give a quick summary of trends you noticed. Don't read a list of every filler from every speaker. Focus on patterns, not a play-by-play.",
      },
    ],
  },
  {
    key: 'grammarian',
    title: 'Grammarian',
    teaser: 'Catch language wins as much as language slips.',
    duration: 'Report: 60s max',
    sections: [
      { body: 'You listen to how people use language, the good and the not-so-good.' },
      {
        label: 'During the meeting',
        body: "When introduced, briefly explain your role. Then pay attention. You're listening for grammar mistakes, awkward phrasing, and words used incorrectly. But you're also listening for the moments when someone says something particularly well. A sharp turn of phrase. A sentence that landed perfectly. A word choice that elevated the whole speech.",
      },
      {
        label: 'Reporting',
        body: 'When the General Evaluator calls on you, share what you noticed. Mention a few errors and suggest improvements, but also highlight two or three sentences from the meeting that stood out for the right reasons. Quote them. This role is about celebrating strong language as much as correcting weak spots.',
      },
    ],
  },
  {
    key: 'timer',
    title: 'Timer',
    teaser: 'Keep the meeting honest about time.',
    sections: [
      { body: 'You keep the meeting honest about time.' },
      {
        label: 'Before the meeting',
        body: 'Set up your station. Plug in the light tower, grab the remote and test it to make sure it works, and have the bell and tracking sheet ready. Confirm speech lengths with each speaker.',
      },
      {
        label: 'During the meeting',
        body: (
          <>
            <p>When introduced, briefly explain your role and walk through the timing signals. Here&apos;s how timing works at Gilbert:</p>

            <p className="font-bold text-[#1C1C1C] mt-5 mb-2">Table Topics (1 to 2 minutes, grace to 2:30)</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Green at 1:00, speaker is in the qualifying range</li>
              <li>Yellow at 1:30</li>
              <li>Red at 2:00</li>
              <li>Blinking red at 2:30, disqualified for awards</li>
              <li>At 3:00, ring the bell</li>
            </ul>
            <p className="mt-2">
              When reporting: give each speaker&apos;s name, whether they qualify, and a short sentence reminding the audience what they talked about. This is the hardest part of the job. Don&apos;t just repeat the question they were asked. Capture what they actually said.
            </p>

            <p className="font-bold text-[#1C1C1C] mt-5 mb-2">Prepared Speeches (varies by project)</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Green at the minimum time</li>
              <li>Yellow at the midpoint</li>
              <li>Red at the maximum</li>
              <li>Blinking red 30 seconds past maximum, disqualified</li>
              <li>90 seconds overtime, ring the bell</li>
            </ul>
            <p className="mt-2">Qualification means speaking within 30 seconds above or below the target time.</p>

            <p className="font-bold text-[#1C1C1C] mt-5 mb-2">Evaluations (2 to 3:30 minutes)</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Green at 2:00</li>
              <li>Yellow at 2:30</li>
              <li>Red at 3:00</li>
              <li>Blinking red at 3:30, disqualified</li>
              <li>At 4:00, ring the bell</li>
            </ul>

            <p className="font-bold text-[#1C1C1C] mt-5 mb-2">Functionary Reports</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Most reports have a 60-second maximum. Joke Master and Word of Wisdom have 90 seconds.</li>
              <li>Ring the bell once when time is reached.</li>
              <li>If they keep going, ring the bell again after a 30-second grace period.</li>
            </ul>
          </>
        ),
      },
      {
        label: 'Reporting',
        body: 'For prepared speeches and evaluations, just state who qualifies for awards. Keep it efficient.',
      },
    ],
  },
  {
    key: 'joke-master',
    title: 'Joke Master',
    teaser: 'Bring the laugh. Short, clean, fun.',
    duration: '90 seconds max',
    sections: [
      { body: 'You bring the laugh. Keep it short, keep it clean, keep it fun.' },
      {
        label: 'Before the meeting',
        body: 'Find a joke or short anecdote that works for a mixed audience. Practice delivering it without notes. This is a mini performance, not a reading.',
      },
      {
        label: 'During the meeting',
        body: 'When the General Evaluator calls on you, step up and deliver. Use your voice, your timing, your facial expressions. This is your chance to practice the performance side of speaking in a low-pressure way.',
      },
      {
        label: 'Goal',
        body: "Give the room a moment of energy and laughter. Not every joke kills. That's fine. The delivery matters as much as the material.",
      },
    ],
  },
  {
    key: 'word-of-wisdom',
    title: 'Word of Wisdom',
    teaser: 'Share something worth thinking about.',
    duration: '90 seconds max',
    sections: [
      { body: 'You share something worth thinking about.' },
      {
        label: 'Before the meeting',
        body: "Choose a quote, a personal insight, or an idea that resonates with you. Then think about why it matters. The best Words of Wisdom aren't just read. They're explained. What does this idea mean to you? When has it applied in your life? Why should the room care?",
      },
      {
        label: 'During the meeting',
        body: "When called on, deliver your word of wisdom as a short speech. Don't just read a quote and sit down. Connect with the audience. Share the context. Make it yours.",
      },
      {
        label: 'What to aim for',
        body: "Leave the room thinking. The best Words of Wisdom stick with people past the meeting. Choose something you'd want to hear again, and deliver it like it matters.",
      },
    ],
  },
]
