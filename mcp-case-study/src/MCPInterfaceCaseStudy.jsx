import React, { useState } from 'react';

const MCPInterfaceCaseStudy = () => {
  const [activeIteration, setActiveIteration] = useState(2);
  const [activePersona, setActivePersona] = useState(0);

  const colors = {
    bg: '#ffffff',
    bgAlt: '#fafafa',
    border: '#e5e5e5',
    text: '#171717',
    textMuted: '#525252',
    textDim: '#a3a3a3',
    accent: '#2563eb',
    accentLight: '#eff6ff',
    green: '#16a34a',
    greenLight: '#f0fdf4',
    orange: '#ea580c',
    orangeLight: '#fff7ed',
    purple: '#9333ea',
    purpleLight: '#faf5ff',
    red: '#dc2626',
    redLight: '#fef2f2',
  };

  // === MOCKUP COMPONENTS ===

  const MockBrowser = ({ children, url = 'mcp.interface.dev' }) => (
    <div style={{ 
      border: `1px solid ${colors.border}`, 
      borderRadius: '12px', 
      overflow: 'hidden',
      background: colors.bg,
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
    }}>
      <div style={{ 
        background: colors.bgAlt, 
        padding: '12px 16px', 
        borderBottom: `1px solid ${colors.border}`,
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
        </div>
        <div style={{ 
          flex: 1, 
          background: colors.bg, 
          padding: '6px 12px', 
          borderRadius: '6px', 
          fontSize: '12px', 
          color: colors.textDim,
          border: `1px solid ${colors.border}`
        }}>
          {url}
        </div>
      </div>
      {children}
    </div>
  );

  const AgentBadge = ({ role, color, colorLight }) => (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px',
      background: colorLight,
      color: color,
      borderRadius: '4px',
      fontSize: '11px',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: '0.03em',
      fontFamily: "'IBM Plex Mono', monospace"
    }}>
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: color }} />
      {role}
    </span>
  );

  const MainInterface = ({ showExpanded = false }) => (
    <MockBrowser>
      <div style={{ display: 'flex', height: '500px' }}>
        {/* Sidebar */}
        <div style={{ width: '240px', borderRight: `1px solid ${colors.border}`, padding: '16px', background: colors.bgAlt }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: colors.textDim, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Sessions
          </div>
          {['Research pipeline', 'Doc summarizer v2', 'Code review chain'].map((name, i) => (
            <div key={i} style={{
              padding: '10px 12px',
              background: i === 0 ? colors.bg : 'transparent',
              borderRadius: '6px',
              marginBottom: '4px',
              cursor: 'pointer',
              border: i === 0 ? `1px solid ${colors.border}` : '1px solid transparent'
            }}>
              <div style={{ fontSize: '13px', fontWeight: 500, color: colors.text, marginBottom: '2px' }}>{name}</div>
              <div style={{ fontSize: '11px', color: colors.textDim }}>{i === 0 ? '3 agents · Just now' : i === 1 ? '2 agents · 2h ago' : '4 agents · Yesterday'}</div>
            </div>
          ))}
          <button style={{
            width: '100%',
            padding: '10px',
            marginTop: '12px',
            background: 'transparent',
            border: `1px dashed ${colors.border}`,
            borderRadius: '6px',
            color: colors.textDim,
            fontSize: '13px',
            cursor: 'pointer'
          }}>
            + New session
          </button>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${colors.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 600, color: colors.text }}>Research pipeline</div>
              <div style={{ fontSize: '12px', color: colors.textDim, marginTop: '2px' }}>3 agents · 847 tokens</div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ padding: '6px 12px', background: colors.bgAlt, border: `1px solid ${colors.border}`, borderRadius: '6px', fontSize: '12px', color: colors.textMuted, cursor: 'pointer' }}>
                Export JSON
              </button>
              <button style={{ padding: '6px 12px', background: colors.accent, border: 'none', borderRadius: '6px', fontSize: '12px', color: 'white', cursor: 'pointer' }}>
                Run again
              </button>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflow: 'auto', padding: '20px' }}>
            {/* User input */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '11px', color: colors.textDim, marginBottom: '8px' }}>INPUT</div>
              <div style={{ padding: '12px 16px', background: colors.bgAlt, borderRadius: '8px', fontSize: '14px', color: colors.text, lineHeight: 1.6 }}>
                Research the latest developments in quantum computing and summarize the key breakthroughs from 2024.
              </div>
            </div>

            {/* Agent 1 */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <AgentBadge role="Researcher" color={colors.accent} colorLight={colors.accentLight} />
                <span style={{ fontSize: '11px', color: colors.textDim, fontFamily: "'IBM Plex Mono', monospace" }}>claude-3-sonnet · 234 tokens · 1.2s</span>
              </div>
              <div style={{ 
                padding: '16px', 
                background: colors.bg, 
                border: `1px solid ${colors.border}`, 
                borderRadius: '8px',
                fontSize: '14px',
                color: colors.text,
                lineHeight: 1.7,
                cursor: 'pointer'
              }}>
                Based on my research, the major quantum computing breakthroughs in 2024 include: IBM's 1,121-qubit Condor processor, Google's error correction milestone achieving below-threshold performance, and several advances in room-temperature quantum systems...
                <div style={{ fontSize: '12px', color: colors.accent, marginTop: '12px' }}>
                  Click to see input/output
                </div>
              </div>
            </div>

            {/* Agent 2 */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <AgentBadge role="Critic" color={colors.orange} colorLight={colors.orangeLight} />
                <span style={{ fontSize: '11px', color: colors.textDim, fontFamily: "'IBM Plex Mono', monospace" }}>claude-3-sonnet · 189 tokens · 0.9s</span>
              </div>
              <div style={{ 
                padding: '16px', 
                background: colors.bg, 
                border: `1px solid ${showExpanded ? colors.accent : colors.border}`, 
                borderRadius: '8px',
                fontSize: '14px',
                color: colors.text,
                lineHeight: 1.7
              }}>
                The research is solid but missing context on practical applications. The summary should include timeline estimates for commercial viability and mention the ongoing challenges with decoherence. Recommend adding a section on industry adoption.
              </div>

              {/* Expanded view */}
              {showExpanded && (
                <div style={{ marginTop: '12px', padding: '16px', background: colors.bgAlt, borderRadius: '8px', border: `1px solid ${colors.border}` }}>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: colors.textDim, marginBottom: '8px' }}>INPUT RECEIVED</div>
                  <div style={{ fontSize: '13px', color: colors.textMuted, padding: '12px', background: colors.bg, borderRadius: '6px', fontFamily: "'IBM Plex Mono', monospace", marginBottom: '16px' }}>
                    Review the following research summary for accuracy and completeness: "Based on my research, the major quantum computing breakthroughs in 2024 include..."
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: colors.textDim, marginBottom: '8px' }}>SYSTEM PROMPT</div>
                  <div style={{ fontSize: '13px', color: colors.textMuted, padding: '12px', background: colors.bg, borderRadius: '6px', fontFamily: "'IBM Plex Mono', monospace" }}>
                    You are a critical reviewer. Identify gaps, inaccuracies, and areas for improvement. Be specific and actionable.
                  </div>
                </div>
              )}
            </div>

            {/* Agent 3 */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <AgentBadge role="Writer" color={colors.green} colorLight={colors.greenLight} />
                <span style={{ fontSize: '11px', color: colors.textDim, fontFamily: "'IBM Plex Mono', monospace" }}>claude-3-sonnet · 424 tokens · 2.1s</span>
              </div>
              <div style={{ 
                padding: '16px', 
                background: colors.bg, 
                border: `1px solid ${colors.border}`, 
                borderRadius: '8px',
                fontSize: '14px',
                color: colors.text,
                lineHeight: 1.7
              }}>
                <strong>Quantum Computing: 2024 in Review</strong><br/><br/>
                This year marked significant milestones in quantum computing, with three key developments standing out...
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockBrowser>
  );

  const ConfigPanel = () => (
    <MockBrowser url="mcp.interface.dev/config">
      <div style={{ padding: '24px', minHeight: '350px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <AgentBadge role="Critic" color={colors.orange} colorLight={colors.orangeLight} />
          <span style={{ fontSize: '13px', color: colors.textDim }}>Agent configuration</span>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: colors.textMuted, marginBottom: '6px' }}>Model</label>
          <select style={{ 
            width: '100%', 
            padding: '10px 12px', 
            border: `1px solid ${colors.border}`, 
            borderRadius: '6px', 
            fontSize: '14px',
            background: colors.bg,
            color: colors.text
          }}>
            <option>claude-3-sonnet-20240229</option>
          </select>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: colors.textMuted, marginBottom: '6px' }}>System prompt</label>
          <textarea style={{ 
            width: '100%', 
            padding: '12px', 
            border: `1px solid ${colors.border}`, 
            borderRadius: '6px', 
            fontSize: '13px',
            fontFamily: "'IBM Plex Mono', monospace",
            minHeight: '100px',
            resize: 'vertical',
            lineHeight: 1.5,
            color: colors.text
          }} defaultValue="You are a critical reviewer. Identify gaps, inaccuracies, and areas for improvement. Be specific and actionable." />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: colors.textMuted, marginBottom: '6px' }}>Temperature</label>
            <input type="range" min="0" max="100" defaultValue="70" style={{ width: '100%' }} />
            <div style={{ fontSize: '12px', color: colors.textDim, marginTop: '4px' }}>0.7</div>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: colors.textMuted, marginBottom: '6px' }}>Max tokens</label>
            <input type="number" defaultValue="1024" style={{ 
              width: '100%', 
              padding: '8px 12px', 
              border: `1px solid ${colors.border}`, 
              borderRadius: '6px',
              fontSize: '14px',
              color: colors.text
            }} />
          </div>
        </div>
      </div>
    </MockBrowser>
  );

  const SessionHistory = () => (
    <MockBrowser url="mcp.interface.dev/sessions">
      <div style={{ padding: '24px', minHeight: '350px' }}>
        <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '20px', color: colors.text }}>Session history</div>
        
        {[
          { name: 'Research pipeline', agents: 3, tokens: 847, time: 'Just now', status: 'complete' },
          { name: 'Doc summarizer v2', agents: 2, tokens: 523, time: '2 hours ago', status: 'complete' },
          { name: 'Code review chain', agents: 4, tokens: 1204, time: 'Yesterday', status: 'complete' },
          { name: 'Content generator', agents: 3, tokens: 0, time: 'Yesterday', status: 'draft' },
        ].map((session, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 16px',
            background: i === 0 ? colors.accentLight : colors.bg,
            border: `1px solid ${i === 0 ? colors.accent : colors.border}`,
            borderRadius: '8px',
            marginBottom: '8px'
          }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 500, color: colors.text }}>{session.name}</div>
              <div style={{ fontSize: '12px', color: colors.textDim, marginTop: '2px' }}>
                {session.agents} agents · {session.tokens} tokens · {session.time}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ padding: '6px 10px', background: 'transparent', border: `1px solid ${colors.border}`, borderRadius: '4px', fontSize: '11px', color: colors.textMuted, cursor: 'pointer' }}>
                Duplicate
              </button>
              <button style={{ padding: '6px 10px', background: 'transparent', border: `1px solid ${colors.border}`, borderRadius: '4px', fontSize: '11px', color: colors.textMuted, cursor: 'pointer' }}>
                Export
              </button>
            </div>
          </div>
        ))}
      </div>
    </MockBrowser>
  );

  // V1: Simple linear log
  const V1Interface = () => (
    <MockBrowser url="mcp.interface.dev (v1)">
      <div style={{ padding: '24px', minHeight: '400px', fontFamily: "'IBM Plex Mono', monospace", fontSize: '13px' }}>
        <div style={{ color: colors.textDim, marginBottom: '8px' }}>[10:23:01] Starting chain...</div>
        <div style={{ color: colors.textDim, marginBottom: '8px' }}>[10:23:01] Agent "researcher" processing</div>
        <div style={{ color: colors.text, marginBottom: '16px', paddingLeft: '16px', borderLeft: `2px solid ${colors.border}` }}>
          Based on my research, the major quantum computing breakthroughs in 2024 include: IBM's 1,121-qubit Condor processor...
        </div>
        <div style={{ color: colors.textDim, marginBottom: '8px' }}>[10:23:03] Agent "critic" processing</div>
        <div style={{ color: colors.text, marginBottom: '16px', paddingLeft: '16px', borderLeft: `2px solid ${colors.border}` }}>
          The research is solid but missing context on practical applications...
        </div>
        <div style={{ color: colors.textDim, marginBottom: '8px' }}>[10:23:04] Agent "writer" processing</div>
        <div style={{ color: colors.text, marginBottom: '16px', paddingLeft: '16px', borderLeft: `2px solid ${colors.border}` }}>
          Quantum Computing: 2024 in Review. This year marked significant milestones...
        </div>
        <div style={{ color: colors.green, marginBottom: '8px' }}>[10:23:07] Chain complete. 847 tokens.</div>
      </div>
    </MockBrowser>
  );

  // V2: Sidebar config
  const V2Interface = () => (
    <MockBrowser url="mcp.interface.dev (v2)">
      <div style={{ display: 'flex', height: '400px' }}>
        {/* Sidebar */}
        <div style={{ width: '280px', borderRight: `1px solid ${colors.border}`, padding: '16px', background: colors.bgAlt, overflowY: 'auto' }}>
          <div style={{ fontSize: '11px', fontWeight: 600, color: colors.textDim, marginBottom: '16px', textTransform: 'uppercase' }}>Agents</div>
          
          {[
            { role: 'Researcher', color: colors.accent, colorLight: colors.accentLight },
            { role: 'Critic', color: colors.orange, colorLight: colors.orangeLight },
            { role: 'Writer', color: colors.green, colorLight: colors.greenLight },
          ].map((agent, i) => (
            <div key={i} style={{ padding: '12px', border: `1px solid ${colors.border}`, borderRadius: '8px', marginBottom: '8px', background: colors.bg }}>
              <AgentBadge role={agent.role} color={agent.color} colorLight={agent.colorLight} />
              <div style={{ fontSize: '11px', color: colors.textDim, marginTop: '8px' }}>claude-3-sonnet</div>
              <div style={{ fontSize: '11px', color: colors.textDim, marginTop: '4px', lineHeight: 1.4 }}>
                {agent.role === 'Researcher' && 'Research and gather information...'}
                {agent.role === 'Critic' && 'Review for accuracy and gaps...'}
                {agent.role === 'Writer' && 'Synthesize into final output...'}
              </div>
            </div>
          ))}
        </div>

        {/* Main */}
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          <div style={{ marginBottom: '16px' }}>
            <AgentBadge role="Researcher" color={colors.accent} colorLight={colors.accentLight} />
            <div style={{ marginTop: '8px', padding: '12px', background: colors.bgAlt, borderRadius: '6px', fontSize: '13px', lineHeight: 1.6 }}>
              Based on my research, the major quantum computing breakthroughs...
            </div>
          </div>
          <div style={{ marginBottom: '16px' }}>
            <AgentBadge role="Critic" color={colors.orange} colorLight={colors.orangeLight} />
            <div style={{ marginTop: '8px', padding: '12px', background: colors.bgAlt, borderRadius: '6px', fontSize: '13px', lineHeight: 1.6 }}>
              The research is solid but missing context...
            </div>
          </div>
          <div>
            <AgentBadge role="Writer" color={colors.green} colorLight={colors.greenLight} />
            <div style={{ marginTop: '8px', padding: '12px', background: colors.bgAlt, borderRadius: '6px', fontSize: '13px', lineHeight: 1.6 }}>
              Quantum Computing: 2024 in Review...
            </div>
          </div>
        </div>
      </div>
    </MockBrowser>
  );

  // === PERSONAS ===
  const personas = [
    {
      name: 'Maya Chen',
      role: 'ML Platform Engineer',
      company: 'Series B startup, 80 employees',
      context: 'Building internal tools for the data science team. Manages 3-4 multi-agent pipelines for document processing and code review.',
      goals: [
        'Debug failing agent chains without reading raw logs',
        'Share working configs with teammates',
        'Reduce iteration time from hours to minutes'
      ],
      frustrations: [
        'Can\'t see what input an agent received—only what it output',
        'Configs scattered across notebooks, YAML files, and Slack threads',
        'When a chain fails, no idea which agent caused it'
      ],
      quote: 'I spend more time debugging agent handoffs than building features.',
      usage: 'Daily, 2-3 hours'
    },
    {
      name: 'James Okafor',
      role: 'Product Manager',
      company: 'Enterprise SaaS, 400 employees',
      context: 'Owns the AI features roadmap. Needs to demo multi-agent workflows to stakeholders and write specs for engineering.',
      goals: [
        'Understand what the agents are doing well enough to explain it',
        'Demo workflows without things breaking unpredictably',
        'Define acceptance criteria for agent behavior'
      ],
      frustrations: [
        'Engineers show me notebooks—I can\'t follow what\'s happening',
        'No way to replay a successful run for stakeholders',
        'Hard to write specs when I don\'t understand the system'
      ],
      quote: 'I can\'t ship what I can\'t explain.',
      usage: 'Weekly, for demos and spec writing'
    },
    {
      name: 'Dr. Priya Sharma',
      role: 'Research Scientist',
      company: 'AI research lab',
      context: 'Studying multi-agent collaboration patterns. Runs experiments comparing different agent configurations.',
      goals: [
        'Compare outputs across different model/prompt combinations',
        'Export structured data for analysis',
        'Reproduce specific conversation paths exactly'
      ],
      frustrations: [
        'No way to systematically compare runs',
        'Reproducibility requires manual logging',
        'Interesting behaviors happen mid-chain but aren\'t captured'
      ],
      quote: 'The most interesting behaviors happen between agents—but that\'s what we lose.',
      usage: 'Intensive sessions, 4-6 hours when experimenting'
    }
  ];

  // === FEATURE PRIORITIES ===
  const featurePriorities = [
    {
      priority: 'P0',
      name: 'Conversation view with agent attribution',
      description: 'See which agent said what, with model and token counts',
      status: 'Shipped',
      rationale: 'Core visibility problem. Without this, nothing else matters.'
    },
    {
      priority: 'P0',
      name: 'Expandable input/output pairs',
      description: 'Click any message to see exactly what that agent received',
      status: 'Shipped',
      rationale: 'The #1 debugging question: "what did it see?"'
    },
    {
      priority: 'P0',
      name: 'Session persistence',
      description: 'Every run is saved automatically',
      status: 'Shipped',
      rationale: 'Can\'t reproduce without history.'
    },
    {
      priority: 'P1',
      name: 'Inline config editing',
      description: 'Edit system prompt, model, temperature without leaving the conversation',
      status: 'Shipped',
      rationale: 'Reduces context-switching during iteration.'
    },
    {
      priority: 'P1',
      name: 'JSON export',
      description: 'Export full config as portable JSON payload',
      status: 'Shipped',
      rationale: 'Bridge to production. Added late—should have been earlier.'
    },
    {
      priority: 'P1',
      name: 'Session duplication',
      description: 'Fork a session to try variations',
      status: 'Shipped',
      rationale: 'Enables experimentation without losing working configs.'
    },
    {
      priority: 'P2',
      name: 'Starter templates',
      description: 'Pre-built agent chains for common patterns',
      status: 'Shipped (post-launch)',
      rationale: 'Onboarding. Users didn\'t know where to start.'
    },
    {
      priority: 'P2',
      name: 'DAG visualization',
      description: 'Optional flowchart view for complex chains',
      status: 'In progress',
      rationale: 'Power user request. Conversation view doesn\'t scale past 6-7 agents.'
    },
    {
      priority: 'P2',
      name: 'Team sharing',
      description: 'Share sessions and configs with teammates',
      status: 'Planned',
      rationale: 'Collaboration. Currently people export JSON and send via Slack.'
    },
    {
      priority: 'Cut',
      name: 'Real-time collaboration',
      description: 'Multiple users editing same session',
      status: 'Cut',
      rationale: 'Complexity too high for V1. Revisit after team sharing.'
    },
    {
      priority: 'Cut',
      name: 'Version history',
      description: 'Git-like versioning for configs',
      status: 'Cut',
      rationale: 'Users wanted it but session duplication covers 80% of the need.'
    }
  ];

  // === USER JOURNEY ===
  const journeySteps = [
    {
      phase: 'Discover',
      title: 'Hits a wall with current tools',
      description: 'User is debugging a multi-agent chain. Output is wrong but they can\'t tell why. They\'ve been staring at logs for 20 minutes.',
      painPoints: ['Raw logs are unstructured', 'Can\'t see agent inputs', 'No way to replay'],
      touchpoints: ['Console logs', 'Jupyter notebooks', 'Slack threads with teammates'],
      emotional: 'Frustrated'
    },
    {
      phase: 'Onboard',
      title: 'First session',
      description: 'User creates a new session and defines their first agent chain. Initially confused by blank canvas.',
      painPoints: ['Don\'t know where to start', 'Unfamiliar mental model', 'Which model to pick?'],
      touchpoints: ['New session screen', 'Agent config panel', 'Template library'],
      emotional: 'Uncertain'
    },
    {
      phase: 'Build',
      title: 'Configures and runs chain',
      description: 'User sets up 2-3 agents, writes system prompts, runs the chain. Sees output in conversation view.',
      painPoints: ['Prompt writing is trial and error', 'Not sure if config is right'],
      touchpoints: ['Config panel', 'Run button', 'Conversation view'],
      emotional: 'Engaged'
    },
    {
      phase: 'Debug',
      title: 'Investigates unexpected output',
      description: 'Output isn\'t quite right. User expands messages to see what each agent received. Finds the problem: Critic agent got truncated input.',
      painPoints: ['Still some back-and-forth', 'Need to understand agent behavior'],
      touchpoints: ['Expandable messages', 'Input/output view', 'Token counts'],
      emotional: 'Focused'
    },
    {
      phase: 'Iterate',
      title: 'Tweaks and re-runs',
      description: 'User adjusts the system prompt, re-runs. Output improves. Duplicates session to try a different approach.',
      painPoints: ['Iteration still takes time', 'Easy to lose track of what changed'],
      touchpoints: ['Inline config edit', 'Run again', 'Duplicate session'],
      emotional: 'Productive'
    },
    {
      phase: 'Ship',
      title: 'Exports to production',
      description: 'User finds a config that works. Exports JSON, integrates into their codebase.',
      painPoints: ['Export format needs to match their stack', 'No deployment pipeline yet'],
      touchpoints: ['Export JSON', 'Session history'],
      emotional: 'Satisfied'
    }
  ];

  return (
    <div style={{ background: colors.bg, color: colors.text, fontFamily: "'Inter', -apple-system, sans-serif", minHeight: '100vh' }}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }
        `}
      </style>

      {/* Header */}
      <header style={{ maxWidth: '900px', margin: '0 auto', padding: '80px 24px 64px' }}>
        <div style={{ fontSize: '13px', color: colors.textMuted, marginBottom: '16px' }}>
          Lead Product Designer
        </div>
        <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '24px', letterSpacing: '-0.02em' }}>
          MCP Interface
        </h1>
        <p style={{ fontSize: '18px', color: colors.textMuted, lineHeight: 1.6, maxWidth: '600px' }}>
          A conversation interface for orchestrating multi-agent AI workflows. 
          Users needed to see what was happening between models—not just the final output.
        </p>
      </header>

      {/* Hero Image */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
        <MainInterface />
      </section>

      {/* Problem */}
      <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 80px' }}>
        <h2 style={{ fontSize: '13px', fontWeight: 500, color: colors.textDim, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
          Problem
        </h2>
        <p style={{ fontSize: '17px', color: colors.text, lineHeight: 1.7, marginBottom: '24px' }}>
          Teams using multi-agent setups had no visibility into what was happening between models. 
          When something went wrong—which was often—they couldn't tell which agent failed or why.
        </p>
        <p style={{ fontSize: '17px', color: colors.textMuted, lineHeight: 1.7 }}>
          The existing workflow was: run a chain, get a bad output, guess at which prompt to tweak, 
          re-run, repeat. Engineers were spending more time debugging than building.
        </p>
      </section>

      {/* Personas */}
      <section style={{ background: colors.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 500, color: colors.textDim, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '48px' }}>
            Users
          </h2>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            {personas.map((persona, i) => (
              <button
                key={i}
                onClick={() => setActivePersona(i)}
                style={{
                  padding: '8px 16px',
                  background: activePersona === i ? colors.text : 'transparent',
                  color: activePersona === i ? colors.bg : colors.textMuted,
                  border: `1px solid ${activePersona === i ? colors.text : colors.border}`,
                  borderRadius: '6px',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                {persona.name.split(' ')[0]}
              </button>
            ))}
          </div>

          <div style={{ background: colors.bg, border: `1px solid ${colors.border}`, borderRadius: '12px', padding: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, color: colors.text, marginBottom: '4px' }}>
                  {personas[activePersona].name}
                </h3>
                <div style={{ fontSize: '14px', color: colors.textMuted }}>
                  {personas[activePersona].role}
                </div>
                <div style={{ fontSize: '13px', color: colors.textDim, marginTop: '2px' }}>
                  {personas[activePersona].company}
                </div>
              </div>
              <div style={{ fontSize: '13px', color: colors.textDim, background: colors.bgAlt, padding: '6px 12px', borderRadius: '4px' }}>
                {personas[activePersona].usage}
              </div>
            </div>

            <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: 1.7, marginBottom: '24px' }}>
              {personas[activePersona].context}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '24px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: colors.textDim, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  Goals
                </div>
                {personas[activePersona].goals.map((goal, i) => (
                  <div key={i} style={{ fontSize: '14px', color: colors.text, marginBottom: '8px', paddingLeft: '12px', borderLeft: `2px solid ${colors.green}` }}>
                    {goal}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 600, color: colors.textDim, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                  Frustrations
                </div>
                {personas[activePersona].frustrations.map((frust, i) => (
                  <div key={i} style={{ fontSize: '14px', color: colors.text, marginBottom: '8px', paddingLeft: '12px', borderLeft: `2px solid ${colors.orange}` }}>
                    {frust}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ padding: '16px', background: colors.bgAlt, borderRadius: '8px', borderLeft: `3px solid ${colors.accent}` }}>
              <div style={{ fontSize: '15px', color: colors.text, fontStyle: 'italic' }}>
                "{personas[activePersona].quote}"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ fontSize: '13px', fontWeight: 500, color: colors.textDim, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '48px' }}>
          User Journey
        </h2>

        <div style={{ overflowX: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${journeySteps.length}, 200px)`, gap: '16px', minWidth: 'max-content' }}>
            {journeySteps.map((step, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Phase header */}
                <div style={{ 
                  padding: '8px 12px', 
                  background: colors.accent, 
                  color: 'white', 
                  fontSize: '11px', 
                  fontWeight: 600, 
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  borderRadius: '6px 6px 0 0'
                }}>
                  {step.phase}
                </div>
                
                {/* Card */}
                <div style={{ 
                  flex: 1,
                  padding: '16px', 
                  background: colors.bg, 
                  border: `1px solid ${colors.border}`,
                  borderTop: 'none',
                  borderRadius: '0 0 6px 6px'
                }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: colors.text, marginBottom: '8px' }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: '13px', color: colors.textMuted, lineHeight: 1.5, marginBottom: '16px' }}>
                    {step.description}
                  </div>
                  
                  <div style={{ fontSize: '11px', fontWeight: 600, color: colors.textDim, marginBottom: '6px' }}>Pain points</div>
                  {step.painPoints.map((pain, j) => (
                    <div key={j} style={{ fontSize: '12px', color: colors.textMuted, marginBottom: '4px' }}>
                      · {pain}
                    </div>
                  ))}

                  <div style={{ 
                    marginTop: '16px',
                    padding: '8px',
                    background: step.emotional === 'Frustrated' ? colors.redLight :
                               step.emotional === 'Uncertain' ? colors.orangeLight :
                               step.emotional === 'Satisfied' ? colors.greenLight :
                               colors.accentLight,
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: step.emotional === 'Frustrated' ? colors.red :
                           step.emotional === 'Uncertain' ? colors.orange :
                           step.emotional === 'Satisfied' ? colors.green :
                           colors.accent,
                    textAlign: 'center'
                  }}>
                    {step.emotional}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding System */}
      <section style={{ background: colors.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 500, color: colors.textDim, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            Onboarding System
          </h2>
          <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: 1.7, marginBottom: '48px', maxWidth: '700px' }}>
            A major insight from research: this isn't just for ML engineers. PMs need to demo workflows, 
            executives need to understand capabilities, and ops teams need to monitor costs. 
            We built a progressive onboarding system that meets users where they are.
          </p>

          {/* Onboarding Flow Mockups */}
          <div style={{ display: 'grid', gap: '48px' }}>
            
            {/* Step 1: Role Selection */}
            <div>
              <MockBrowser url="mcp.interface.dev/welcome">
                <div style={{ padding: '48px 24px', textAlign: 'center', minHeight: '400px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 600, color: colors.text, marginBottom: '8px' }}>
                    Welcome to MCP Interface
                  </div>
                  <div style={{ fontSize: '15px', color: colors.textMuted, marginBottom: '40px' }}>
                    Tell us about yourself so we can personalize your experience
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '700px', margin: '0 auto' }}>
                    {[
                      { 
                        title: 'Builder', 
                        desc: 'I write code and configure AI systems',
                        detail: 'Full access to all settings, JSON configs, API details'
                      },
                      { 
                        title: 'Operator', 
                        desc: 'I run workflows and monitor outputs',
                        detail: 'Guided setup, templates, plain-language explanations'
                      },
                      { 
                        title: 'Stakeholder', 
                        desc: 'I review results and make decisions',
                        detail: 'Dashboard view, summaries, cost tracking'
                      }
                    ].map((role, i) => (
                      <div key={i} style={{
                        padding: '24px 20px',
                        border: `1px solid ${i === 1 ? colors.accent : colors.border}`,
                        borderRadius: '12px',
                        background: i === 1 ? colors.accentLight : colors.bg,
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}>
                        <div style={{ fontSize: '16px', fontWeight: 600, color: colors.text, marginBottom: '6px' }}>
                          {role.title}
                        </div>
                        <div style={{ fontSize: '13px', color: colors.textMuted, marginBottom: '12px' }}>
                          {role.desc}
                        </div>
                        <div style={{ fontSize: '12px', color: colors.textDim, lineHeight: 1.5 }}>
                          {role.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </MockBrowser>
              <p style={{ fontSize: '13px', color: colors.textMuted, marginTop: '16px', maxWidth: '600px' }}>
                Role selection determines the default view, terminology complexity, and which features are surfaced first. 
                Users can switch roles anytime in settings.
              </p>
            </div>

            {/* Step 2: Concept Introduction */}
            <div>
              <MockBrowser url="mcp.interface.dev/learn">
                <div style={{ padding: '32px', minHeight: '450px' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
                    {['What are agents?', 'How they work together', 'Your first workflow'].map((step, i) => (
                      <div key={i} style={{
                        padding: '8px 16px',
                        background: i === 0 ? colors.accent : colors.bgAlt,
                        color: i === 0 ? 'white' : colors.textDim,
                        borderRadius: '20px',
                        fontSize: '13px',
                        fontWeight: 500
                      }}>
                        {i + 1}. {step}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 600, color: colors.text, marginBottom: '16px' }}>
                        Think of agents as specialists
                      </h3>
                      <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: 1.7, marginBottom: '20px' }}>
                        Each agent is an AI with a specific job. Just like a team has a researcher, 
                        an editor, and a writer—your workflow can have specialized agents that 
                        pass work to each other.
                      </p>
                      
                      <div style={{ padding: '16px', background: colors.bgAlt, borderRadius: '8px', marginBottom: '16px' }}>
                        <div style={{ fontSize: '12px', fontWeight: 600, color: colors.textDim, marginBottom: '8px' }}>EXAMPLE</div>
                        <div style={{ fontSize: '14px', color: colors.text, lineHeight: 1.6 }}>
                          A "Research Agent" finds information → passes it to a "Critic Agent" who checks for gaps → 
                          then a "Writer Agent" creates the final summary.
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{
                          padding: '10px 20px',
                          background: colors.accent,
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '14px',
                          cursor: 'pointer'
                        }}>
                          Next: How they work together
                        </button>
                        <button style={{
                          padding: '10px 20px',
                          background: 'transparent',
                          color: colors.textMuted,
                          border: `1px solid ${colors.border}`,
                          borderRadius: '6px',
                          fontSize: '14px',
                          cursor: 'pointer'
                        }}>
                          Skip tutorial
                        </button>
                      </div>
                    </div>

                    <div style={{ 
                      background: colors.bgAlt, 
                      borderRadius: '12px', 
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}>
                      {[
                        { role: 'Researcher', color: colors.accent, colorLight: colors.accentLight, desc: 'Gathers information on a topic' },
                        { role: 'Critic', color: colors.orange, colorLight: colors.orangeLight, desc: 'Reviews for accuracy and gaps' },
                        { role: 'Writer', color: colors.green, colorLight: colors.greenLight, desc: 'Creates the final output' },
                      ].map((agent, i) => (
                        <div key={i} style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '16px',
                          padding: '12px 16px',
                          background: colors.bg,
                          borderRadius: '8px'
                        }}>
                          <AgentBadge role={agent.role} color={agent.color} colorLight={agent.colorLight} />
                          <div style={{ fontSize: '13px', color: colors.textMuted }}>{agent.desc}</div>
                          {i < 2 && (
                            <div style={{ marginLeft: 'auto', color: colors.textDim, fontSize: '18px' }}>→</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MockBrowser>
              <p style={{ fontSize: '13px', color: colors.textMuted, marginTop: '16px', maxWidth: '600px' }}>
                Interactive tutorial uses analogies, not jargon. "Specialists on a team" tested better than 
                "LLM instances with system prompts" for non-technical users.
              </p>
            </div>

            {/* Step 3: Guided Template Selection */}
            <div>
              <MockBrowser url="mcp.interface.dev/templates">
                <div style={{ padding: '32px', minHeight: '450px' }}>
                  <div style={{ marginBottom: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, color: colors.text, marginBottom: '8px' }}>
                      Start with a template
                    </h3>
                    <p style={{ fontSize: '14px', color: colors.textMuted }}>
                      Pre-built workflows you can customize. Each one shows exactly what it does.
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                    {[
                      { 
                        name: 'Research & Summarize',
                        desc: 'Research a topic, fact-check findings, write a summary',
                        agents: ['Researcher', 'Critic', 'Writer'],
                        useCase: 'Market research, competitive analysis, report generation',
                        difficulty: 'Beginner'
                      },
                      { 
                        name: 'Document Review',
                        desc: 'Analyze a document, identify issues, suggest improvements',
                        agents: ['Analyzer', 'Reviewer', 'Editor'],
                        useCase: 'Contract review, content editing, compliance checks',
                        difficulty: 'Beginner'
                      },
                      { 
                        name: 'Code Review Pipeline',
                        desc: 'Review code for bugs, security issues, and style',
                        agents: ['Scanner', 'Security', 'Style', 'Summarizer'],
                        useCase: 'PR reviews, security audits, code quality',
                        difficulty: 'Intermediate'
                      },
                      { 
                        name: 'Multi-Source Synthesis',
                        desc: 'Gather from multiple sources, reconcile conflicts, synthesize',
                        agents: ['Gatherer A', 'Gatherer B', 'Reconciler', 'Synthesizer'],
                        useCase: 'News aggregation, research synthesis, data consolidation',
                        difficulty: 'Advanced'
                      },
                    ].map((template, i) => (
                      <div key={i} style={{
                        padding: '20px',
                        border: `1px solid ${colors.border}`,
                        borderRadius: '12px',
                        background: colors.bg,
                        cursor: 'pointer'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                          <div style={{ fontSize: '15px', fontWeight: 600, color: colors.text }}>
                            {template.name}
                          </div>
                          <div style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            padding: '3px 8px',
                            borderRadius: '4px',
                            background: template.difficulty === 'Beginner' ? colors.greenLight :
                                       template.difficulty === 'Intermediate' ? colors.orangeLight :
                                       colors.purpleLight,
                            color: template.difficulty === 'Beginner' ? colors.green :
                                   template.difficulty === 'Intermediate' ? colors.orange :
                                   colors.purple,
                            textTransform: 'uppercase'
                          }}>
                            {template.difficulty}
                          </div>
                        </div>
                        <div style={{ fontSize: '13px', color: colors.textMuted, marginBottom: '12px', lineHeight: 1.5 }}>
                          {template.desc}
                        </div>
                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                          {template.agents.map((agent, j) => (
                            <span key={j} style={{
                              fontSize: '11px',
                              padding: '2px 8px',
                              background: colors.bgAlt,
                              borderRadius: '4px',
                              color: colors.textMuted
                            }}>
                              {agent}
                            </span>
                          ))}
                        </div>
                        <div style={{ fontSize: '12px', color: colors.textDim }}>
                          <strong>Use for:</strong> {template.useCase}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </MockBrowser>
              <p style={{ fontSize: '13px', color: colors.textMuted, marginTop: '16px', maxWidth: '600px' }}>
                Templates show agent count, difficulty level, and concrete use cases. 
                Non-technical users can start running workflows without configuring anything.
              </p>
            </div>

            {/* Step 4: Contextual Help */}
            <div>
              <MockBrowser url="mcp.interface.dev/session/new">
                <div style={{ display: 'flex', height: '400px' }}>
                  {/* Main area */}
                  <div style={{ flex: 1, padding: '24px' }}>
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: colors.textMuted, marginBottom: '6px' }}>
                        System prompt
                        <span style={{ 
                          marginLeft: '8px', 
                          padding: '2px 6px', 
                          background: colors.accentLight, 
                          color: colors.accent, 
                          borderRadius: '4px',
                          fontSize: '10px',
                          cursor: 'pointer'
                        }}>
                          What's this?
                        </span>
                      </label>
                      <textarea style={{ 
                        width: '100%', 
                        padding: '12px', 
                        border: `1px solid ${colors.accent}`, 
                        borderRadius: '6px', 
                        fontSize: '13px',
                        fontFamily: "'IBM Plex Mono', monospace",
                        minHeight: '80px',
                        resize: 'vertical',
                        lineHeight: 1.5,
                        color: colors.text
                      }} defaultValue="You are a research assistant. Find accurate, recent information on the given topic." />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: colors.textMuted, marginBottom: '6px' }}>
                        Model
                      </label>
                      <select style={{ 
                        width: '100%', 
                        padding: '10px 12px', 
                        border: `1px solid ${colors.border}`, 
                        borderRadius: '6px', 
                        fontSize: '14px',
                        background: colors.bg,
                        color: colors.text
                      }}>
                        <option>Claude 3 Sonnet — Balanced speed and quality</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 500, color: colors.textMuted, marginBottom: '6px' }}>
                        Temperature
                        <span style={{ 
                          marginLeft: '8px', 
                          padding: '2px 6px', 
                          background: colors.accentLight, 
                          color: colors.accent, 
                          borderRadius: '4px',
                          fontSize: '10px',
                          cursor: 'pointer'
                        }}>
                          What's this?
                        </span>
                      </label>
                      <input type="range" min="0" max="100" defaultValue="30" style={{ width: '100%' }} />
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: colors.textDim, marginTop: '4px' }}>
                        <span>More focused</span>
                        <span>0.3</span>
                        <span>More creative</span>
                      </div>
                    </div>
                  </div>

                  {/* Help panel */}
                  <div style={{ width: '280px', borderLeft: `1px solid ${colors.border}`, padding: '20px', background: colors.bgAlt }}>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: colors.accent, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                      Help: System Prompt
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: colors.text, marginBottom: '8px' }}>
                      Instructions for the agent
                    </div>
                    <p style={{ fontSize: '13px', color: colors.textMuted, lineHeight: 1.6, marginBottom: '16px' }}>
                      The system prompt tells this agent what role to play and how to behave. 
                      Think of it as a job description.
                    </p>
                    <div style={{ padding: '12px', background: colors.bg, borderRadius: '6px', marginBottom: '16px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: colors.textDim, marginBottom: '6px' }}>GOOD EXAMPLE</div>
                      <div style={{ fontSize: '12px', color: colors.text, fontStyle: 'italic' }}>
                        "You are a fact-checker. Verify claims against reliable sources. Flag anything uncertain."
                      </div>
                    </div>
                    <div style={{ padding: '12px', background: colors.redLight, borderRadius: '6px' }}>
                      <div style={{ fontSize: '11px', fontWeight: 600, color: colors.red, marginBottom: '6px' }}>AVOID</div>
                      <div style={{ fontSize: '12px', color: colors.text, fontStyle: 'italic' }}>
                        "Be helpful" — too vague, agent won't know what to do
                      </div>
                    </div>
                  </div>
                </div>
              </MockBrowser>
              <p style={{ fontSize: '13px', color: colors.textMuted, marginTop: '16px', maxWidth: '600px' }}>
                Contextual help panels appear when users interact with unfamiliar settings. 
                Plain language, good/bad examples, no jargon.
              </p>
            </div>

            {/* Model Explainer */}
            <div>
              <MockBrowser url="mcp.interface.dev/learn/models">
                <div style={{ padding: '32px', minHeight: '400px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: colors.text, marginBottom: '8px' }}>
                    Choosing the right model
                  </h3>
                  <p style={{ fontSize: '14px', color: colors.textMuted, marginBottom: '24px' }}>
                    Different models have different strengths. Here's how to pick.
                  </p>

                  <div style={{ display: 'grid', gap: '12px' }}>
                    {[
                      {
                        name: 'Claude 3 Opus',
                        speed: 'Slower',
                        quality: 'Highest',
                        cost: '$$$',
                        bestFor: 'Complex analysis, nuanced writing, difficult reasoning',
                        avoid: 'Simple tasks, high-volume processing'
                      },
                      {
                        name: 'Claude 3 Sonnet',
                        speed: 'Balanced',
                        quality: 'High',
                        cost: '$$',
                        bestFor: 'Most tasks — good default choice',
                        avoid: 'When you need maximum quality or minimum cost'
                      },
                      {
                        name: 'Claude 3 Haiku',
                        speed: 'Fastest',
                        quality: 'Good',
                        cost: '$',
                        bestFor: 'Simple tasks, high volume, quick responses',
                        avoid: 'Complex reasoning, long-form writing'
                      }
                    ].map((model, i) => (
                      <div key={i} style={{
                        display: 'grid',
                        gridTemplateColumns: '140px 80px 80px 60px 1fr',
                        gap: '16px',
                        alignItems: 'center',
                        padding: '16px',
                        background: i === 1 ? colors.accentLight : colors.bg,
                        border: `1px solid ${i === 1 ? colors.accent : colors.border}`,
                        borderRadius: '8px'
                      }}>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 600, color: colors.text }}>{model.name}</div>
                          {i === 1 && <div style={{ fontSize: '10px', color: colors.accent, fontWeight: 600 }}>RECOMMENDED</div>}
                        </div>
                        <div>
                          <div style={{ fontSize: '10px', color: colors.textDim, marginBottom: '2px' }}>SPEED</div>
                          <div style={{ fontSize: '13px', color: colors.text }}>{model.speed}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '10px', color: colors.textDim, marginBottom: '2px' }}>QUALITY</div>
                          <div style={{ fontSize: '13px', color: colors.text }}>{model.quality}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '10px', color: colors.textDim, marginBottom: '2px' }}>COST</div>
                          <div style={{ fontSize: '13px', color: colors.text }}>{model.cost}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: '12px', color: colors.textMuted }}>
                            <strong style={{ color: colors.green }}>Best for:</strong> {model.bestFor}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '24px', padding: '16px', background: colors.bgAlt, borderRadius: '8px' }}>
                    <div style={{ fontSize: '13px', color: colors.textMuted, lineHeight: 1.6 }}>
                      <strong style={{ color: colors.text }}>Pro tip:</strong> Start with Sonnet. 
                      If outputs aren't good enough, try Opus. If you're processing lots of simple tasks, try Haiku.
                    </div>
                  </div>
                </div>
              </MockBrowser>
              <p style={{ fontSize: '13px', color: colors.textMuted, marginTop: '16px', maxWidth: '600px' }}>
                Model comparison uses plain language (speed/quality/cost) instead of technical specs. 
                Clear recommendations help non-technical users make confident choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Screens */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 500, color: colors.textDim, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '48px' }}>
            Key Screens
          </h2>
          
          <div style={{ display: 'grid', gap: '64px' }}>
            <div>
              <MainInterface showExpanded={true} />
              <p style={{ fontSize: '13px', color: colors.textMuted, marginTop: '16px', maxWidth: '700px' }}>
                The key unlock: clicking any message reveals the exact input that agent received. 
                Finally visible: "what did the critic actually see before it gave that feedback?"
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '32px' }}>
              <div>
                <ConfigPanel />
                <p style={{ fontSize: '13px', color: colors.textMuted, marginTop: '16px' }}>
                  Inline editing for system prompt, model, and temperature. Changes apply to next run.
                </p>
              </div>
              <div>
                <SessionHistory />
                <p style={{ fontSize: '13px', color: colors.textMuted, marginTop: '16px' }}>
                  Every run is saved. Users can duplicate a session to try variations without losing the original.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Priorities */}
      <section style={{ maxWidth: '1000px', margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ fontSize: '13px', fontWeight: 500, color: colors.textDim, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
          Feature Priorities
        </h2>
        <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: 1.7, marginBottom: '48px', maxWidth: '700px' }}>
          How we decided what to build first—and what to cut.
        </p>

        <div style={{ display: 'grid', gap: '12px' }}>
          {featurePriorities.map((feature, i) => (
            <div 
              key={i} 
              style={{ 
                display: 'grid',
                gridTemplateColumns: '60px 1fr 100px',
                gap: '16px',
                alignItems: 'center',
                padding: '16px',
                background: feature.priority === 'Cut' ? colors.bgAlt : colors.bg,
                border: `1px solid ${colors.border}`,
                borderRadius: '8px',
                opacity: feature.priority === 'Cut' ? 0.6 : 1
              }}
            >
              <div style={{
                padding: '4px 8px',
                background: feature.priority === 'P0' ? colors.accentLight :
                           feature.priority === 'P1' ? colors.greenLight :
                           feature.priority === 'P2' ? colors.orangeLight :
                           colors.bgAlt,
                color: feature.priority === 'P0' ? colors.accent :
                       feature.priority === 'P1' ? colors.green :
                       feature.priority === 'P2' ? colors.orange :
                       colors.textDim,
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 600,
                textAlign: 'center'
              }}>
                {feature.priority}
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 500, color: colors.text, marginBottom: '2px' }}>
                  {feature.name}
                </div>
                <div style={{ fontSize: '13px', color: colors.textMuted }}>
                  {feature.rationale}
                </div>
              </div>
              <div style={{ 
                fontSize: '11px', 
                color: feature.status === 'Shipped' ? colors.green :
                       feature.status === 'Cut' ? colors.textDim :
                       colors.orange,
                fontWeight: 500,
                textAlign: 'right'
              }}>
                {feature.status}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Decisions */}
      <section style={{ background: colors.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 500, color: colors.textDim, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '48px' }}>
            Key Decisions
          </h2>

          <div style={{ display: 'grid', gap: '48px' }}>
            <div>
              <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '12px' }}>
                Conversation over flowchart
              </h3>
              <p style={{ fontSize: '16px', color: colors.textMuted, lineHeight: 1.7 }}>
                Early explorations used a node-based DAG view—felt more "technical" and showed the flow explicitly. 
                But in testing, users found it harder to follow. The conversation format was more familiar, 
                and agent handoffs became clear through message threading. We kept the DAG as an optional view 
                for complex chains but defaulted to conversation.
              </p>
            </div>

            <div style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '48px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '12px' }}>
                Inline config, not sidebar
              </h3>
              <p style={{ fontSize: '16px', color: colors.textMuted, lineHeight: 1.7 }}>
                V2 had agent configs in a sidebar. Users kept losing context—clicking on a message, 
                then looking at the sidebar, then back. We moved config to an expandable panel attached 
                to each agent's first message. More vertical space, but less cognitive jumping.
              </p>
            </div>

            <div style={{ borderTop: `1px solid ${colors.border}`, paddingTop: '48px' }}>
              <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '12px' }}>
                Show the input, not just output
              </h3>
              <p style={{ fontSize: '16px', color: colors.textMuted, lineHeight: 1.7 }}>
                This was the biggest unlock. Initially we only showed what each agent said. But the debugging 
                question was always "what did it see?"—the input it received from the previous agent. 
                Adding expandable input/output pairs to each message made the actual data flow visible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Iteration */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 500, color: colors.textDim, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '48px' }}>
            Iteration
          </h2>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
            {['V1: Linear log', 'V2: Sidebar config', 'V3: Inline expansion'].map((label, i) => (
              <button
                key={i}
                onClick={() => setActiveIteration(i)}
                style={{
                  padding: '8px 16px',
                  background: activeIteration === i ? colors.text : 'transparent',
                  color: activeIteration === i ? colors.bg : colors.textMuted,
                  border: `1px solid ${activeIteration === i ? colors.text : colors.border}`,
                  borderRadius: '6px',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {activeIteration === 0 && (
            <div>
              <V1Interface />
              <div style={{ maxWidth: '700px', marginTop: '24px' }}>
                <p style={{ fontSize: '16px', color: colors.textMuted, lineHeight: 1.7, marginBottom: '16px' }}>
                  First version was basically a chat log with timestamps and agent names. 
                  Tested with 8 users—most couldn't tell which agent was which, and nobody 
                  could figure out why a specific output was wrong.
                </p>
                <p style={{ fontSize: '16px', color: colors.text, lineHeight: 1.7 }}>
                  <strong>Learning:</strong> Seeing outputs isn't enough. Need to see the handoff.
                </p>
              </div>
            </div>
          )}

          {activeIteration === 1 && (
            <div>
              <V2Interface />
              <div style={{ maxWidth: '700px', marginTop: '24px' }}>
                <p style={{ fontSize: '16px', color: colors.textMuted, lineHeight: 1.7, marginBottom: '16px' }}>
                  Added a sidebar with agent cards showing config. Better—users could now 
                  see and edit prompts. But there was too much eye movement between sidebar 
                  and main content. People kept losing their place.
                </p>
                <p style={{ fontSize: '16px', color: colors.text, lineHeight: 1.7 }}>
                  <strong>Learning:</strong> Config needs to live closer to the message.
                </p>
              </div>
            </div>
          )}

          {activeIteration === 2 && (
            <div>
              <MainInterface showExpanded={true} />
              <div style={{ maxWidth: '700px', marginTop: '24px' }}>
                <p style={{ fontSize: '16px', color: colors.textMuted, lineHeight: 1.7, marginBottom: '16px' }}>
                  Moved everything inline. Click any message to see its input, the agent's config, 
                  and metrics. More vertical scrolling, but context stays together. 
                  Users could finally trace a problem from output back to cause.
                </p>
                <p style={{ fontSize: '16px', color: colors.text, lineHeight: 1.7 }}>
                  <strong>Shipped this.</strong> Debug time dropped significantly in pilot.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Outcome */}
      <section style={{ background: colors.bgAlt, padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 500, color: colors.textDim, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px' }}>
            Outcome
          </h2>
          <p style={{ fontSize: '17px', color: colors.text, lineHeight: 1.7, marginBottom: '24px' }}>
            Launched to a 40-user pilot over 3 weeks. The main signal we tracked was debug time—how long 
            from "this output is wrong" to "I know which agent/prompt to fix."
          </p>
          <p style={{ fontSize: '24px', color: colors.text, fontWeight: 600, marginBottom: '16px' }}>
            Average debug time went from ~12 minutes to ~5 minutes.
          </p>
          <p style={{ fontSize: '16px', color: colors.textMuted, lineHeight: 1.7 }}>
            Not a perfect metric—self-reported and small sample—but directionally strong. 
            More importantly, users stopped asking "what did the agent see?" because they could just look.
          </p>
        </div>
      </section>

      {/* Reflection */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 500, color: colors.textDim, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '24px' }}>
            What I'd do differently
          </h2>
          <ul style={{ fontSize: '16px', color: colors.textMuted, lineHeight: 1.8, paddingLeft: '20px' }}>
            <li style={{ marginBottom: '12px' }}>
              Start with templates. We launched with a blank canvas and users didn't know where to begin. 
              Added starter templates post-launch—should've been day one.
            </li>
            <li style={{ marginBottom: '12px' }}>
              Build the export flow earlier. Users wanted to take configs to production. 
              We added JSON export late; it became one of the most-used features.
            </li>
            <li>
              More testing with non-engineers. Optimized for ML engineers but PMs needed to 
              use it too for demos. Their needs were different and we caught that late.
            </li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 24px', borderTop: `1px solid ${colors.border}` }}>
      </footer>
    </div>
  );
};

export default MCPInterfaceCaseStudy;
