import React, { useState } from 'react';
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Command,
  Filter,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TicketCheck,
  Users,
  Wrench,
} from 'lucide-react';
import { Link, Navigate, NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom';

const tickets = [
  { id: 'INC-2481', title: 'Checkout latency in EU region', team: 'Payments', owner: 'Maya Chen', initials: 'MC', color: 'coral', priority: 'Critical', status: 'Investigating', updated: '4 min ago' },
  { id: 'INC-2479', title: 'SSO callback returns an expired token', team: 'Identity', owner: 'Theo Park', initials: 'TP', color: 'blue', priority: 'High', status: 'Investigating', updated: '18 min ago' },
  { id: 'INC-2476', title: 'Export job stuck in processing', team: 'Platform', owner: 'Ari Brooks', initials: 'AB', color: 'violet', priority: 'Normal', status: 'Waiting', updated: '36 min ago' },
  { id: 'INC-2472', title: 'New members cannot join shared spaces', team: 'Collaboration', owner: 'Nina Patel', initials: 'NP', color: 'gold', priority: 'Normal', status: 'Resolved', updated: '1 hr ago' },
  { id: 'INC-2468', title: 'Mobile push notifications delayed', team: 'Mobile', owner: 'Leo Martin', initials: 'LM', color: 'mint', priority: 'Low', status: 'Resolved', updated: '2 hrs ago' },
  { id: 'INC-2463', title: 'Usage report shows duplicate events', team: 'Analytics', owner: 'Sam Rivera', initials: 'SR', color: 'blue', priority: 'High', status: 'Waiting', updated: '3 hrs ago' },
];

const activity = [
  { icon: Check, tone: 'green', title: 'Incident resolved', detail: 'INC-2468 · Mobile push notifications', time: '12 min ago' },
  { icon: Users, tone: 'blue', title: 'Maya Chen joined Payments', detail: 'Team assignment updated', time: '28 min ago' },
  { icon: Sparkles, tone: 'gold', title: 'AI summary generated', detail: 'INC-2481 · Checkout latency', time: '41 min ago' },
];

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onSignIn={() => setAuthenticated(true)} />} />
      <Route path="/" element={authenticated ? <Workspace /> : <Navigate to="/login" replace />}>
        <Route index element={<OverviewPage />} />
        <Route path="queue" element={<QueuePage />} />
      </Route>
      <Route path="*" element={<Navigate to={authenticated ? '/' : '/login'} replace />} />
    </Routes>
  );
}

function LoginPage({ onSignIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('alex.morgan@relayops.io');
  const [password, setPassword] = useState('relay-demo-2025');

  function handleSubmit(event) {
    event.preventDefault();
    onSignIn();
    navigate('/');
  }

  return (
    <main className="login-page">
      <section className="login-showcase" aria-label="Relay Ops workspace preview">
        <Link className="brand brand-light" to="/login" aria-label="Relay Ops sign in">
          <span className="brand-mark"><Activity size={19} strokeWidth={2.7} /></span>
          <span>relay<span className="brand-weight">ops</span></span>
        </Link>
        <div className="showcase-copy">
          <p className="eyebrow eyebrow-light"><span className="live-dot" /> SERVICE, IN SYNC</p>
          <h1>Make the hard days<br />feel <em>manageable.</em></h1>
          <p className="showcase-description">One calm place to see what needs attention, bring the right people in, and keep every customer moving.</p>
        </div>
        <div className="preview-window" aria-label="Preview of the incident dashboard">
          <div className="preview-topline"><span>TEAM PULSE</span><span className="preview-live"><span className="live-dot" /> LIVE</span></div>
          <div className="preview-number">94.8<span>%</span><span className="preview-trend"><ArrowUpRight size={14} /> 3.2%</span></div>
          <div className="preview-label">Issues resolved within SLA</div>
          <div className="preview-chart" aria-hidden="true">
            {[28, 40, 34, 52, 45, 62, 55, 73, 60, 82, 70, 94, 77, 88, 66, 100, 83, 94, 72, 85, 66, 78, 91, 74].map((height, index) => (
              <span key={index} style={{ height: `${height}%`, opacity: 0.45 + height / 200 }} />
            ))}
          </div>
          <div className="preview-foot"><span>MON 09</span><span>WED 11</span><span>FRI 13</span><span>SUN 15</span></div>
          <div className="preview-divider" />
          <div className="preview-status"><span className="status-orb"><ShieldCheck size={17} /></span><span><strong>All systems operational</strong><small>Last checked just now</small></span><ArrowUpRight className="preview-status-arrow" size={17} /></div>
        </div>
        <div className="showcase-footer"><span>BUILT FOR THE MOMENTS THAT MATTER</span><span>01 — 03</span></div>
      </section>

      <section className="login-panel">
        <div className="login-panel-top"><span>Already have an account?</span><button className="text-button" type="button" onClick={() => document.getElementById('email')?.focus()}>Sign in</button></div>
        <div className="login-form-wrap">
          <div className="login-icon"><LockKeyhole size={21} /></div>
          <p className="eyebrow">WELCOME BACK</p>
          <h2>Sign in to Relay Ops</h2>
          <p className="login-intro">Your team has things covered. Pick up right where you left off.</p>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Work email</label>
            <input id="email" name="email" type="email" autoComplete="username" value={email} onChange={(event) => setEmail(event.target.value)} required />
            <div className="label-row"><label htmlFor="password">Password</label><button className="text-button muted-button" type="button">Forgot password?</button></div>
            <input id="password" name="password" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required />
            <button className="primary-button login-submit" type="submit">Sign in to workspace <ArrowRight size={17} /></button>
          </form>
          <div className="login-separator"><span />or continue with<span /></div>
          <button className="sso-button" type="button" onClick={handleSubmit}><span className="sso-mark">S</span> Continue with SSO</button>
          <p className="login-security"><ShieldCheck size={15} /> Your workspace is protected with enterprise-grade security</p>
        </div>
        <footer className="login-panel-footer"><span>© 2025 Relay Ops</span><a href="mailto:support@relayops.example">Need help?</a><button type="button" aria-label="Language: English">EN <ChevronDown size={13} /></button></footer>
      </section>
    </main>
  );
}

function Workspace() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [notice, setNotice] = useState(false);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Link className="brand sidebar-brand" to="/" aria-label="Relay Ops home"><span className="brand-mark"><Activity size={18} strokeWidth={2.7} /></span><span>relay<span className="brand-weight">ops</span></span></Link>
        <div className="workspace-switcher"><div className="workspace-avatar">N</div><span><strong>Northstar Studio</strong><small>Enterprise plan</small></span><ChevronDown size={15} /></div>
        <div className="sidebar-label">WORKSPACE</div>
        <nav className="primary-nav" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}><LayoutDashboard size={17} /><span>Overview</span><span className="nav-shortcut">⌘ 1</span></NavLink>
          <NavLink to="/queue" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}><TicketCheck size={17} /><span>Service queue</span><span className="nav-count">8</span></NavLink>
          <button className="nav-link" type="button" onClick={() => setNotice(true)}><Users size={17} /><span>Customers</span></button>
          <button className="nav-link" type="button" onClick={() => setNotice(true)}><Wrench size={17} /><span>Services</span></button>
        </nav>
        <div className="sidebar-label sidebar-label-spaced">MANAGE</div>
        <nav className="primary-nav" aria-label="Workspace management">
          <button className="nav-link" type="button" onClick={() => setNotice(true)}><Activity size={17} /><span>Analytics</span></button>
          <button className="nav-link" type="button" onClick={() => setNotice(true)}><Settings2 size={17} /><span>Settings</span></button>
        </nav>
        <div className="sidebar-spacer" />
        <div className="sidebar-help"><span className="help-icon"><CircleHelp size={16} /></span><span><strong>Need a hand?</strong><small>Visit our help center</small></span><ArrowUpRight size={15} /></div>
        <button className="profile-button" type="button" onClick={() => setNotice(true)}><span className="avatar avatar-profile">AM</span><span className="profile-copy"><strong>Alex Morgan</strong><small>Workspace admin</small></span><MoreHorizontal size={18} /></button>
      </aside>

      <main className="main-area">
        <header className="topbar">
          <div className="breadcrumb"><span>Northstar Studio</span><span className="breadcrumb-slash">/</span><strong>Workspace</strong></div>
          <div className="topbar-actions">
            <button className={`icon-button top-search${searchOpen ? ' search-active' : ''}`} type="button" aria-label={searchOpen ? 'Close search' : 'Search workspace'} onClick={() => setSearchOpen(!searchOpen)}><Search size={17} /><span>Search</span><kbd><Command size={11} /> K</kbd></button>
            <span className="topbar-divider" />
            <button className="icon-button notification-button" type="button" aria-label="Notifications" onClick={() => setNotice(!notice)}><Bell size={18} /><span className="notification-dot" /></button>
            <button className="avatar avatar-top" type="button" aria-label="Alex Morgan account" onClick={() => setNotice(true)}>AM</button>
          </div>
          {searchOpen && <div className="search-popover"><Search size={17} /><input aria-label="Search incidents" placeholder="Search incidents, customers, or services..." autoFocus /><kbd>ESC</kbd></div>}
          {notice && <div className="notice-popover" role="status"><span className="notice-icon"><Check size={15} /></span><span><strong>You’re all caught up</strong><small>There are no new updates right now.</small></span><button type="button" aria-label="Dismiss notification" onClick={() => setNotice(false)}>×</button></div>}
        </header>
        <div className="page-content"><Outlet /></div>
      </main>
    </div>
  );
}

function PageHeading({ eyebrow, title, description, action, children }) {
  return <div className="page-heading"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="page-description">{description}</p></div><div className="heading-actions">{children}{action}</div></div>;
}

function OverviewPage() {
  const navigate = useNavigate();
  return (
    <>
      <PageHeading eyebrow="MONDAY, JUNE 16, 2025" title="Good morning, Alex" description="Here’s what’s happening across your support team today.">
        <button className="secondary-button" type="button"><CalendarDays size={16} /> Last 7 days <ChevronDown size={14} /></button>
        <button className="primary-button" type="button" onClick={() => navigate('/queue')}><Plus size={17} /> New incident</button>
      </PageHeading>
      <section className="metric-grid" aria-label="Support performance metrics">
        <MetricCard label="Open incidents" value="24" change="12%" direction="down" note="vs. last week" icon={TicketCheck} tone="coral" foot="8 need attention" />
        <MetricCard label="First response" value="4m 32s" change="18%" direction="down" note="vs. last week" icon={Clock3} tone="blue" foot="Target under 5 min" />
        <MetricCard label="Customer happiness" value="96.4%" change="2.4%" direction="up" note="vs. last week" icon={Sparkles} tone="gold" foot="Based on 182 ratings" />
        <MetricCard label="SLA compliance" value="98.2%" change="0.8%" direction="up" note="vs. last week" icon={ShieldCheck} tone="green" foot="Above 95% target" />
      </section>

      <section className="dashboard-grid">
        <article className="panel performance-panel">
          <div className="panel-heading"><div><h2>Team performance</h2><p>Incident volume and resolution rate</p></div><button className="more-button" type="button" aria-label="More performance options"><MoreHorizontal size={19} /></button></div>
          <div className="chart-legend"><span><i className="legend-dot legend-incidents" /> Incidents created</span><span><i className="legend-dot legend-resolved" /> Resolved</span><span className="chart-total"><strong>186</strong> this week</span></div>
          <div className="chart-area" role="img" aria-label="Bar chart showing incidents created and resolved from Monday to Sunday">
            <div className="chart-ylabels"><span>60</span><span>40</span><span>20</span><span>0</span></div>
            <div className="chart-bars">
              <div className="grid-line line-one" /><div className="grid-line line-two" /><div className="grid-line line-three" />
              {[
                ['Mon', 40, 27], ['Tue', 61, 47], ['Wed', 49, 35], ['Thu', 76, 58], ['Fri', 54, 45], ['Sat', 31, 25], ['Sun', 43, 34],
              ].map(([day, created, resolved]) => <div className="bar-group" key={day}><div className="bar-pair"><span className="bar-created" style={{ height: `${created}%` }} /><span className="bar-resolved" style={{ height: `${resolved}%` }} /></div><span className="bar-label">{day}</span></div>)}
            </div>
          </div>
          <div className="chart-foot"><span><span className="chart-foot-dot" /> Resolution rate</span><strong>92.6% <span className="positive-change"><ArrowUpRight size={13} /> 4.1%</span></strong></div>
        </article>

        <article className="panel activity-panel">
          <div className="panel-heading"><div><h2>Recent activity</h2><p>Updates from your workspace</p></div><button className="more-button" type="button" aria-label="More activity options"><MoreHorizontal size={19} /></button></div>
          <div className="activity-list">{activity.map((item) => <div className="activity-item" key={item.title}><span className={`activity-icon ${item.tone}`}><item.icon size={15} /></span><div className="activity-copy"><strong>{item.title}</strong><span>{item.detail}</span><small>{item.time}</small></div></div>)}</div>
          <button className="activity-link" type="button" onClick={() => navigate('/queue')}>View all activity <ArrowRight size={15} /></button>
        </article>
      </section>

      <section className="panel incidents-panel">
        <div className="panel-heading incidents-heading"><div><h2>Needs your attention</h2><p>Open incidents that may need a closer look</p></div><button className="inline-link" type="button" onClick={() => navigate('/queue')}>View service queue <ArrowRight size={15} /></button></div>
        <IncidentTable rows={tickets.slice(0, 3)} compact />
      </section>
      <div className="page-bottom-note"><span><span className="live-dot" /> All systems operational</span><span>Data refreshed 2 min ago</span></div>
    </>
  );
}

function MetricCard({ label, value, change, direction, note, icon: Icon, tone, foot }) {
  return <article className="metric-card"><div className="metric-top"><span>{label}</span><span className={`metric-icon ${tone}`}><Icon size={17} /></span></div><div className="metric-value">{value}</div><div className="metric-change"><span className={direction === 'up' ? 'positive-change' : 'positive-change'}>{direction === 'up' ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}{change}</span><span>{note}</span></div><div className="metric-foot">{foot}</div></article>;
}

function QueuePage() {
  const [statusFilter, setStatusFilter] = useState('All incidents');
  const [query, setQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const filteredTickets = tickets.filter((ticket) => {
    const matchesStatus = statusFilter === 'All incidents' || ticket.status === statusFilter;
    const searchText = `${ticket.id} ${ticket.title} ${ticket.team} ${ticket.owner}`.toLowerCase();
    return matchesStatus && searchText.includes(query.toLowerCase());
  });

  return (
    <>
      <PageHeading eyebrow="SUPPORT OPERATIONS" title="Service queue" description="Triage, assign, and resolve incidents across your workspace.">
        <button className="secondary-button" type="button" onClick={() => setShowFilters(!showFilters)}><SlidersHorizontal size={16} /> Filters <span className="filter-count">2</span></button>
        <button className="primary-button" type="button"><Plus size={17} /> New incident</button>
      </PageHeading>
      <section className="queue-summary" aria-label="Incident status summary">
        <button className={`queue-summary-item${statusFilter === 'All incidents' ? ' selected' : ''}`} onClick={() => setStatusFilter('All incidents')} type="button"><span className="summary-dot all-dot" /><span>All incidents</span><strong>24</strong></button>
        <button className={`queue-summary-item${statusFilter === 'Investigating' ? ' selected' : ''}`} onClick={() => setStatusFilter('Investigating')} type="button"><span className="summary-dot investigating-dot" /><span>Investigating</span><strong>8</strong></button>
        <button className={`queue-summary-item${statusFilter === 'Waiting' ? ' selected' : ''}`} onClick={() => setStatusFilter('Waiting')} type="button"><span className="summary-dot waiting-dot" /><span>Waiting</span><strong>6</strong></button>
        <button className={`queue-summary-item${statusFilter === 'Resolved' ? ' selected' : ''}`} onClick={() => setStatusFilter('Resolved')} type="button"><span className="summary-dot resolved-dot" /><span>Resolved</span><strong>10</strong></button>
      </section>
      <section className="panel queue-panel">
        <div className="queue-toolbar"><div className="queue-tabs"><button className="queue-tab active" type="button" onClick={() => setStatusFilter('All incidents')}>All incidents <span>24</span></button><button className="queue-tab" type="button" onClick={() => setStatusFilter('Investigating')}>Assigned to me <span>5</span></button><button className="queue-tab" type="button" onClick={() => setStatusFilter('Waiting')}>Unassigned <span>3</span></button></div><div className="queue-tools"><label className="queue-search"><Search size={16} /><input aria-label="Search incidents" placeholder="Search incidents..." value={query} onChange={(event) => setQuery(event.target.value)} /></label><button className={`icon-button queue-filter-button${showFilters ? ' search-active' : ''}`} type="button" aria-label="Toggle filters" onClick={() => setShowFilters(!showFilters)}><Filter size={16} /></button></div></div>
        {showFilters && <div className="filter-strip"><span>Priority:</span><button type="button" className="filter-chip">All priorities <ChevronDown size={13} /></button><span>Team:</span><button type="button" className="filter-chip">All teams <ChevronDown size={13} /></button><button className="clear-filters" type="button" onClick={() => { setStatusFilter('All incidents'); setQuery(''); }}>Clear filters</button></div>}
        <IncidentTable rows={filteredTickets} />
        <div className="table-footer"><span>Showing <strong>{filteredTickets.length}</strong> of 24 incidents</span><div className="pagination"><button type="button" disabled aria-label="Previous page">‹</button><button className="current-page" type="button" aria-label="Page 1">1</button><button type="button" aria-label="Page 2">2</button><button type="button" aria-label="Page 3">3</button><span>...</span><button type="button" aria-label="Page 6">6</button><button type="button" aria-label="Next page">›</button></div></div>
      </section>
      <div className="queue-bottom-note"><span><Clock3 size={14} /> SLA response target: under 5 minutes</span><button type="button"><Settings2 size={14} /> Queue settings</button></div>
    </>
  );
}

function IncidentTable({ rows, compact = false }) {
  return <div className={`table-scroll${compact ? ' compact-table' : ''}`}><table className="incident-table"><thead><tr><th scope="col"><input type="checkbox" aria-label="Select all incidents" /></th><th scope="col">Incident</th><th scope="col">Priority</th><th scope="col">Status</th><th scope="col">Team</th><th scope="col">Assignee</th><th scope="col">Updated</th><th scope="col"><span className="visually-hidden">More actions</span></th></tr></thead><tbody>{rows.map((ticket) => <tr key={ticket.id}><td><input type="checkbox" aria-label={`Select ${ticket.id}`} /></td><td><div className="incident-cell"><span className="incident-id">{ticket.id}</span><strong>{ticket.title}</strong></div></td><td><span className={`priority-pill ${ticket.priority.toLowerCase()}`}><span />{ticket.priority}</span></td><td><span className={`status-pill ${ticket.status.toLowerCase()}`}><i />{ticket.status}</span></td><td><span className="team-name">{ticket.team}</span></td><td><span className="assignee"><span className={`avatar avatar-${ticket.color}`}>{ticket.initials}</span>{ticket.owner}</span></td><td className="updated-cell">{ticket.updated}</td><td><button className="row-more" type="button" aria-label={`More actions for ${ticket.id}`}><MoreHorizontal size={17} /></button></td></tr>)}</tbody></table>{rows.length === 0 && <div className="empty-state"><span className="empty-icon"><Search size={19} /></span><strong>No incidents found</strong><span>Try changing your search or filters.</span></div>}</div>;
}

export default App;