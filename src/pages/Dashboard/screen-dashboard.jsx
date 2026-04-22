// Reportive — Dashboard overview screen
// Single artboard content. Assumes chrome.jsx + colors_and_type.css are loaded.

const ScreenDashboard = () => (
  <div style={{ display: 'flex', height: '100%', background: 'var(--navy-base)', fontFamily: 'var(--font-body)', position: 'relative' }}>
    <RSidebar active="dashboard"/>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <RFlare intensity={0.35}/>
      <RTopBar title="Marketing Performance" subtitle="PT Kopi Senja Nusantara · Client workspace" period="Mar 1 – 31, 2025"/>
      <div style={{ flex: 1, overflow: 'auto', padding: 24, position: 'relative', zIndex: 1 }}>

        {/* Hero banner */}
        <div style={{ position: 'relative', borderRadius: 16, padding: '22px 24px', marginBottom: 20, background: 'linear-gradient(135deg,rgba(0,194,184,.06),rgba(248,180,0,.04))', border: '1px solid var(--navy-edge)', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle,rgba(248,180,0,.18),transparent 70%)', filter: 'blur(60px)', top: -120, right: -60 }}/>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                <RStatus type="connected" label="4 sources live"/>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Last sync 2 min ago</span>
              </div>
              <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em', color: '#FCFCFC' }}>Performa marketing Maret 2025 <span style={{ color: 'var(--avo-teal)' }}>naik 19,7%</span></h1>
              <p style={{ margin: '6px 0 0', fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'var(--text-secondary)', maxWidth: 560, lineHeight: 1.5 }}>Konversi meningkat seiring dengan shift anggaran ke Google Ads. SEO organik tumbuh 8,1% tanpa tambahan budget. Rekomendasikan lanjutkan strategi current.</p>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button style={{ padding: '7px 12px', background: 'transparent', color: 'var(--text-secondary)', border: '1px solid var(--navy-edge)', borderRadius: 8, fontFamily: 'var(--font-display)', fontSize: 11.5, fontWeight: 600, cursor: 'pointer' }}>Share</button>
              <button style={{ padding: '7px 12px', background: 'var(--navy-elevated)', color: '#FCFCFC', border: '1px solid var(--navy-edge)', borderRadius: 8, fontFamily: 'var(--font-display)', fontSize: 11.5, fontWeight: 600, cursor: 'pointer' }}>View details →</button>
            </div>
          </div>
        </div>

        {/* KPIs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 20 }}>
          <RMetric label="Total Ad Spend" value="Rp 48,5 Jt" delta={12.4} accent="var(--gold-base)" spark={[20,22,19,24,28,31,33]}/>
          <RMetric label="Conversions" value="1.284" delta={19.7} accent="var(--avo-teal)" spark={[10,11,13,12,15,17,22]}/>
          <RMetric label="Avg ROAS" value="3,82x" delta={4.1} accent="var(--avo-teal)" spark={[3.1,3.3,3.4,3.5,3.6,3.7,3.82]}/>
          <RMetric label="Organic Sessions" value="24.830" delta={8.1} accent="var(--pillar-manifest)" spark={[18,19,21,22,23,24,24.8]}/>
        </div>

        {/* Two column: Channel breakdown + Trend */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 12, marginBottom: 20 }}>
          <RCard padding={18}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#FCFCFC' }}>Spend vs Conversions · Weekly</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)' }}>All paid channels, March 2025</div>
              </div>
              <div style={{ display: 'flex', gap: 10, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-secondary)' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><span style={{ width: 8, height: 2, background: 'var(--gold-base)' }}/>Spend</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}><span style={{ width: 8, height: 2, background: 'var(--avo-teal)' }}/>Conversions</span>
              </div>
            </div>
            <svg viewBox="0 0 500 180" style={{ width: '100%', height: 180 }}>
              <defs>
                <linearGradient id="goldGrad" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#F8B400" stopOpacity="0.3"/><stop offset="100%" stopColor="#F8B400" stopOpacity="0"/></linearGradient>
                <linearGradient id="tealGrad" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#00C2B8" stopOpacity="0.3"/><stop offset="100%" stopColor="#00C2B8" stopOpacity="0"/></linearGradient>
              </defs>
              {[40,80,120,160].map(y => <line key={y} x1="30" x2="500" y1={y} y2={y} stroke="#334766" strokeDasharray="2,3" strokeWidth="0.5"/>)}
              {['W1','W2','W3','W4'].map((l,i)=><text key={l} x={60+i*130} y="175" fontFamily="DM Mono" fontSize="9" fill="#64748B">{l}</text>)}
              <path d="M30 120 L160 100 L290 90 L420 60 L500 50 L500 180 L30 180 Z" fill="url(#goldGrad)"/>
              <path d="M30 120 L160 100 L290 90 L420 60 L500 50" fill="none" stroke="#F8B400" strokeWidth="2"/>
              <path d="M30 140 L160 135 L290 110 L420 85 L500 70 L500 180 L30 180 Z" fill="url(#tealGrad)"/>
              <path d="M30 140 L160 135 L290 110 L420 85 L500 70" fill="none" stroke="#00C2B8" strokeWidth="2"/>
              {[[30,120],[160,100],[290,90],[420,60],[500,50]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3" fill="#F8B400"/>)}
              {[[30,140],[160,135],[290,110],[420,85],[500,70]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3" fill="#00C2B8"/>)}
            </svg>
          </RCard>

          <RCard padding={18}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#FCFCFC', marginBottom: 14 }}>Spend mix</div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <svg width="120" height="120" viewBox="0 0 42 42">
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#243350" strokeWidth="4"/>
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#F8B400" strokeWidth="4" strokeDasharray="48 100" strokeDashoffset="25" transform="rotate(-90 21 21)"/>
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#00C2B8" strokeWidth="4" strokeDasharray="34 100" strokeDashoffset="-23" transform="rotate(-90 21 21)"/>
                <circle cx="21" cy="21" r="15.9" fill="none" stroke="#7000FF" strokeWidth="4" strokeDasharray="18 100" strokeDashoffset="-57" transform="rotate(-90 21 21)"/>
                <text x="21" y="22" textAnchor="middle" fontFamily="Space Grotesk" fontWeight="700" fontSize="5" fill="#FCFCFC">48,5</text>
                <text x="21" y="27" textAnchor="middle" fontFamily="DM Mono" fontSize="2.4" fill="#64748B">Jt IDR</text>
              </svg>
              <div style={{ flex: 1, fontSize: 11.5, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[['Google Ads','#F8B400','48%','Rp 23,3 Jt'], ['Meta Ads','#00C2B8','34%','Rp 16,5 Jt'], ['Display/Retargeting','#7000FF','18%','Rp 8,7 Jt']].map(([l,c,pct,rp]) => (
                  <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ width: 8, height: 8, background: c, borderRadius: 2 }}/>
                    <span style={{ flex: 1, fontFamily: 'var(--font-body)', color: 'var(--text-secondary)' }}>{l}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: '#FCFCFC', fontSize: 11 }}>{pct}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: 10, width: 62, textAlign: 'right' }}>{rp}</span>
                  </div>
                ))}
              </div>
            </div>
          </RCard>
        </div>

        {/* Channel summary table */}
        <RCard padding={0} style={{ overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--navy-edge)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#FCFCFC' }}>Channel Summary</div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: 'var(--text-muted)' }}>Performance by integration source</div>
            </div>
            <a style={{ fontFamily: 'var(--font-display)', fontSize: 11.5, color: 'var(--avo-teal)', fontWeight: 600 }}>Manage integrations →</a>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-body)', fontSize: 12 }}>
            <thead>
              <tr style={{ background: 'var(--navy-deep)' }}>
                {['Channel','Status','Spend','Impr.','Clicks','CTR','Conv.','ROAS','Trend'].map(h => (
                  <th key={h} style={{ padding: '8px 14px', textAlign: h === 'Channel' ? 'left' : 'right', fontFamily: 'var(--font-mono)', fontSize: 9.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['google','Google Ads','active','Rp 23,3 Jt','482.300','18.240','3,78%','628','4,1x',[12,14,13,16,18,17,19]],
                ['meta','Meta Ads','active','Rp 16,5 Jt','612.400','22.130','3,61%','489','3,4x',[10,11,13,12,14,14,15]],
                ['ga4','GA4 · Direct','connected','—','—','8.210','—','142','—',[8,9,9,10,11,11,12]],
                ['search','Search Console','connected','—','94.600','3.120','3,30%','25','—',[6,7,8,8,9,10,12]],
              ].map((r,i) => (
                <tr key={i} style={{ borderTop: '1px solid rgba(51,71,102,.5)' }}>
                  <td style={{ padding: '10px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 28, height: 28, background: 'var(--navy-deep)', border: '1px solid var(--navy-edge)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChannelLogo channel={r[0]} size={16}/></div>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#FCFCFC' }}>{r[1]}</span>
                    </div>
                  </td>
                  <td style={{ padding: '10px 14px', textAlign: 'right' }}><RStatus type={r[2]}/></td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', fontFamily: 'var(--font-mono)', color: '#FCFCFC' }}>{r[3]}</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{r[4]}</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>{r[5]}</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', fontFamily: 'var(--font-mono)', color: '#FCFCFC' }}>{r[6]}</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', fontFamily: 'var(--font-mono)', color: '#FCFCFC' }}>{r[7]}</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--avo-teal)' }}>{r[8]}</td>
                  <td style={{ padding: '10px 14px', textAlign: 'right' }}><Spark data={r[9]} w={70} h={18}/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </RCard>

        {/* Analyst note */}
        <div style={{ background: 'linear-gradient(135deg,rgba(0,194,184,.04),rgba(248,180,0,.02))', border: '1px solid var(--navy-edge)', borderRadius: 12, padding: '14px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <div style={{ width: 22, height: 22, background: 'rgba(0,194,184,.14)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="12" height="12" fill="none" stroke="#00C2B8" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--avo-teal)' }}>Analyst note · March 2025</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            {[
              ['📊','What happened','Total spend naik 12,4% MoM, diimbangi dengan kenaikan konversi 19,7%.'],
              ['💡','Why it matters','Google Ads tetap menjadi kontributor ROAS terbesar di 4,1x. Pertumbuhan SEO organik terjadi tanpa tambahan budget.'],
              ['🎯','Next action','Geser 15% budget retargeting ke brand awareness Google Ads untuk memperkuat momentum Q2.'],
            ].map(([e,t,b]) => (
              <div key={t} style={{ display: 'flex', gap: 10 }}>
                <span style={{ fontSize: 14 }}>{e}</span>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: '#FCFCFC' }}>{t}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-secondary)', lineHeight: 1.5, marginTop: 2 }}>{b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </div>
);

Object.assign(window, { ScreenDashboard });
