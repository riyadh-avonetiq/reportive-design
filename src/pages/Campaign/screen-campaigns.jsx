// Reportive — Campaigns (Google Ads deep-dive) screen

const ScreenCampaigns = () => (
  <div style={{ display: 'flex', height: '100%', background: 'var(--navy-base)', fontFamily: 'var(--font-body)', position: 'relative' }}>
    <RSidebar active="campaigns"/>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <RFlare intensity={0.25}/>
      <RTopBar title="Campaigns · Google Ads" subtitle="Drill-down by campaign performance" period="Mar 2025"/>
      <div style={{ flex: 1, overflow: 'auto', padding: 24, position: 'relative', zIndex: 1 }}>

        {/* Channel banner */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20, padding: '14px 18px', background: 'var(--navy-surface)', border: '1px solid var(--navy-edge)', borderLeft: '3px solid #4285F4', borderRadius: 12 }}>
          <div style={{ width: 42, height: 42, background: 'rgba(66,133,244,.12)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChannelLogo channel="google" size={26}/></div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 700, color: '#FCFCFC' }}>Google Ads · 8 active campaigns</div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 11.5, color: 'var(--text-muted)' }}>Budget bulan ini <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>Rp 30 Jt</span> · Terpakai <span style={{ fontFamily: 'var(--font-mono)', color: '#F8B400' }}>78%</span></div>
          </div>
          <RStatus type="connected"/>
          <button style={{ padding: '7px 14px', background: 'linear-gradient(135deg,#00C2B8,#009E96)', color: '#0C182C', border: 'none', borderRadius: 8, fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>+ New campaign</button>
        </div>

        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 20 }}>
          <RMetric label="Spend" value="Rp 23,3 Jt" delta={8.2} accent="#4285F4" spark={[12,13,14,16,18,21,23]}/>
          <RMetric label="Impressions" value="482.300" delta={14.0} accent="var(--gold-base)" spark={[8,9,11,13,14,16,18]}/>
          <RMetric label="CTR" value="3,78%" delta={0.4} accent="var(--avo-teal)" spark={[3.4,3.5,3.6,3.6,3.7,3.78,3.78]}/>
          <RMetric label="ROAS" value="4,1x" delta={6.5} accent="var(--avo-teal)" spark={[3.4,3.6,3.7,3.8,3.9,4.0,4.1]}/>
        </div>

        {/* Campaign list + daily trend */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 12, marginBottom: 20 }}>
          <RCard padding={0} style={{ overflow: 'hidden' }}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--navy-edge)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: '#FCFCFC' }}>Active Campaigns</div>
              <div style={{ display: 'flex', gap: 6 }}>
                {['All','Search','Display','Video'].map((t,i) => (
                  <span key={t} style={{ padding: '4px 10px', fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 600, borderRadius: 6, background: i===0 ? 'rgba(0,194,184,.12)' : 'transparent', color: i===0 ? 'var(--avo-teal)' : 'var(--text-muted)', cursor: 'pointer' }}>{t}</span>
                ))}
              </div>
            </div>
            {[
              ['Brand Awareness Q1','Search','active','Rp 8,4 Jt','172.300','6.520','3,78%','4,1x',[10,11,13,12,14,16,18]],
              ['Retargeting · Cart','Display','active','Rp 4,2 Jt','94.100','3.180','3,38%','5,2x',[6,7,8,8,9,10,11]],
              ['Product Launch · Bold Brew','Search','active','Rp 6,1 Jt','112.800','4.240','3,76%','3,8x',[8,9,11,12,13,15,16]],
              ['Ramadan Promo','Display','paused','Rp 2,9 Jt','68.200','2.180','3,20%','2,9x',[4,5,6,6,5,5,5]],
              ['YouTube · House of Senja','Video','active','Rp 1,7 Jt','34.900','2.120','6,08%','—',[2,3,4,5,6,7,7]],
            ].map((r,i) => (
              <div key={i} style={{ padding: '12px 18px', borderTop: '1px solid rgba(51,71,102,.4)', display: 'grid', gridTemplateColumns: '2fr repeat(6,1fr) 70px', gap: 8, alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 12.5, fontWeight: 600, color: '#FCFCFC' }}>{r[0]}</div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 3, alignItems: 'center' }}>
                    <RChip color={{Search:'#4285F4', Display:'#F8B400', Video:'#E3170A'}[r[1]]}>{r[1]}</RChip>
                    <RStatus type={r[2]}/>
                  </div>
                </div>
                <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 11.5, color: '#FCFCFC' }}>{r[3]}</span>
                <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-secondary)' }}>{r[4]}</span>
                <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--text-secondary)' }}>{r[5]}</span>
                <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 11.5, color: '#FCFCFC' }}>{r[6]}</span>
                <span style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: 11.5, color: 'var(--avo-teal)' }}>{r[7]}</span>
                <div style={{ textAlign: 'right' }}><Spark data={r[8]} w={60} color="#F8B400"/></div>
                <div style={{ textAlign: 'right' }}><span style={{ padding: '3px 8px', fontFamily: 'var(--font-display)', fontSize: 10, color: 'var(--text-muted)', border: '1px solid var(--navy-edge)', borderRadius: 4 }}>Edit</span></div>
              </div>
            ))}
          </RCard>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <RCard padding={16}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: '#FCFCFC', marginBottom: 10 }}>Daily Spend · Budget pacing</div>
              <svg viewBox="0 0 280 120" style={{ width: '100%' }}>
                <line x1="0" x2="280" y1="30" y2="30" stroke="#334766" strokeDasharray="3,3" strokeWidth="0.5"/>
                <text x="275" y="27" fontFamily="DM Mono" fontSize="8" fill="#F8B400" textAnchor="end">Target Rp 1Jt/day</text>
                {Array.from({length:31}).map((_,i) => {
                  const h = 25 + Math.sin(i*0.3)*15 + Math.random()*30;
                  return <rect key={i} x={i*8.5+4} y={120-h} width="5.5" height={h} rx="1" fill={i<22?'#4285F4':'#243350'}/>;
                })}
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--text-muted)', marginTop: 4 }}><span>Mar 1</span><span>Mar 31</span></div>
            </RCard>
            <RCard padding={16}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 700, color: '#FCFCFC', marginBottom: 12 }}>Top Keywords</div>
              {[['kopi specialty jakarta','1.240','4,82%','1.2x'], ['roaster arabika premium','892','3,60%','0.8x'], ['biji kopi senja','640','4,12%','1.0x'], ['cold brew delivery','412','2,98%','0.6x']].map(([k,imp,ctr,qs],i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 50px 50px 40px', gap: 6, padding: '7px 0', borderTop: i ? '1px solid rgba(51,71,102,.4)' : 'none', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, color: '#FCFCFC' }}>{k}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--text-secondary)', textAlign: 'right' }}>{imp}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: '#FCFCFC', textAlign: 'right' }}>{ctr}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--avo-teal)', textAlign: 'right' }}>{qs}</span>
                </div>
              ))}
            </RCard>
          </div>
        </div>

        {/* Featured callout */}
        <RCard padding={16} style={{ borderTop: '2px solid var(--gold-base)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
            <div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
                <RChip color="#F8B400">🏆 Top performer</RChip>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Campaign of the month</span>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, color: '#FCFCFC' }}>Retargeting · Cart <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>— Display</span></div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-secondary)', margin: '4px 0 0', maxWidth: 540, lineHeight: 1.5 }}>ROAS tertinggi di bulan ini (5,2x), didorong oleh audience segment "cart-abandoner 7 hari" dan creative carousel baru. Rekomendasi: tambah budget 30% untuk April 2025.</p>
            </div>
            <div style={{ display: 'flex', gap: 18 }}>
              {[['ROAS','5,2x'],['Conv.','218'],['CPA','Rp 19.2K']].map(([l,v]) => (
                <div key={l} style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{l}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 800, color: '#FCFCFC', fontVariantNumeric: 'tabular-nums' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </RCard>

      </div>
    </div>
  </div>
);

Object.assign(window, { ScreenCampaigns });
