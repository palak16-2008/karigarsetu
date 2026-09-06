import { Building2, Check, ChevronRight } from "lucide-react";

export default function MarketMatchCard({ market }) {
  return (
    <div className="match-card">
      <div className="match-icon"><Building2 size={22}/></div>
      <div className="match-main">
        <div className="match-top"><div><h3>{market.name}</h3><span className="muted">Prototype Match Score</span></div><strong>{market.score}%</strong></div>
        <div className="progress"><span style={{width: `${market.score}%`}}/></div>
        <div className="match-details">
          {market.reason.map((r, i) => <span key={i}><Check size={14}/> {r}</span>)}
        </div>
        <div className="match-footer"><span>Expected order: {market.order}</span><span>{market.location}</span></div>
      </div>
      <ChevronRight className="match-arrow"/>
    </div>
  );
}