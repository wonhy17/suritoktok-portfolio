import { useState } from 'react'
import { MapPin, ShieldCheck, Zap, ChevronRight, X, Phone, Calendar, ClipboardCheck, History } from 'lucide-react';
import logo from './assets/수리톡톡.png';

const TECHNICIANS_DATA = [
    {
      id: 1,
      name: "진복남",
      experience: "8년",
      location: "부산광역시",
      lastVerifiedDate: "2025.12.20",
      repairCount: 2113,
      startDate: "2023.11.10",
      description: "서비스 친철도가 높아 고객 만족도가 상위권인 기술자.",
      imageUrl: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=600&h=800&fit=crop",
      verified: true
    },
    {
      id: 2,
      name: "신성민",
      experience: "9년",
      location: "부산광역시",
      lastVerifiedDate: "2025.10.28",
      repairCount: 1930,
      startDate: "2023.12.22",
      description: "인테리어 경력을 바탕으로 세심한 디테일을 충족하는 기술자.",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop",
      verified: true
    },
    {
      id: 3,
      name: "김성호",
      experience: "8년",
      location: "부산광역시",
      lastVerifiedDate: "2026.01.02",
      repairCount: 1726,
      startDate: "2023.08.30",
      description: "수리 가능 범위가 굉장히 넓고 인사이트가 다양한 다재다능 기술자.",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop",
      verified: true
    },
    {
      id: 4,
      name: "김세진",
      experience: "4년",
      location: "부산광역시",
      lastVerifiedDate: "2025.11.13",
      repairCount: 562,
      startDate: "2024.06.05",
      description: "꼼꼼한 점검으로 수리 종료까지 방심하지 않는 무결점 기술자.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop",
      verified: true
    },
    {
      id: 5,
      name: "황의경",
      experience: "3년",
      location: "부산광역시",
      lastVerifiedDate: "2025.12.16",
      repairCount: 220,
      startDate: "2025.01.20",
      description: "친절한 마인드가 둘째가라면 서러울 기분 좋은 기술자.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop",
      verified: true
    },
    {
      id: 6,
      name: "한수도",
      experience: "14년",
      location: "서울 영등포구",
      lastVerifiedDate: "2024.12.12",
      repairCount: 1120,
      startDate: "2022.02.14",
      description: "막힌 곳 시원하게 뚫어드립니다. 사후 관리 확실합니다. 화장실 리모델링 상담 환영.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop",
      verified: true
    }
  ];

  const App = () => {
    const [selectedTech, setSelectedTech] = useState(null);
    const brandColor = "#0088ff";

    return (
      <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-32">
        {/* Header */}
        <header className="bg-white border-b sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={logo} alt="설명 텍스트" className="h-6 w-auto"></img>
              <h1 style={{ color: brandColor }} className="text-2xl font-black tracking-tighter">수리톡톡</h1>
            </div>
            <div className="text-slate-400 text-sm font-bold uppercase tracking-widest">
              수리톡톡 기술자 리스트
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-16">
          {/* Title Section */}
          <section className="mb-16 text-center md:text-left">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                수리톡톡이 보증하는 <br/>
                <span style={{ color: brandColor }}>안심 기술자</span> 리스트
              </h2>
              <p className="text-lg text-slate-500 font-medium italic">
                "모든 기술자는 수리톡톡의 신원 확인과 실력 검증을 주기적으로 통과해요!"
              </p>
            </div>
          </section>

          {/* Results Grid - 분야 필터 없이 전체 노출 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {TECHNICIANS_DATA.map((tech) => (
              <div 
                key={tech.id}
                onClick={() => setSelectedTech(tech)}
                className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col h-[600px]"
              >
                {/* 이미지 영역 */}
                <div className="relative h-[65%] overflow-hidden">
                  <img 
                    src={tech.imageUrl} 
                    alt={tech.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm p-2.5 rounded-2xl text-[#0088ff] shadow-lg border border-blue-50">
                      <ShieldCheck size={28} fill="currentColor" className="text-white" style={{ color: brandColor }} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent p-8">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-white text-xs font-bold tracking-widest uppercase opacity-80">
                        검증 완료
                      </span>
                    </div>
                  </div>
                </div>

                {/* 정보 영역 */}
                <div className="p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{tech.name} 기사</h3>
                    <div className="flex items-center text-sm font-bold text-slate-400 mb-6">
                      <MapPin size={16} className="mr-1" />
                      {tech.location} · 경력 {tech.experience}
                    </div>

                    {/* 수리톡톡 검증 정보 */}
                    <div className="space-y-3 p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-400">마지막 검증일</span>
                        <span className="text-slate-700">{tech.lastVerifiedDate}</span>
                      </div>
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-400">함께한 수리 건수</span>
                        <span style={{ color: brandColor }}>{tech.repairCount.toLocaleString()}건</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-50">
                    <span className="text-[10px] font-black text-slate-300 tracking-tighter uppercase">Member since {tech.startDate.split('.')[0]}</span>
                    <div style={{ color: brandColor }} className="font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      상세보기 <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Fixed Call Button at Bottom Center */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 w-full max-w-md px-6">
          <a 
            href="tel:1551-7784"
            style={{ backgroundColor: brandColor }}
            className="flex items-center justify-center gap-3 w-full text-white font-black py-6 rounded-[2rem] shadow-2xl shadow-[#0088ff]/40 hover:brightness-110 active:scale-95 transition-all"
          >
            <Phone size={28} fill="currentColor" />
            <span className="text-2xl tracking-tighter"><a href="tel:1551-7784">전화 문의 1551-7784</a></span>
          </a>
        </div>

        {/* Tech Profile Modal */}
        {selectedTech && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
              <button 
                onClick={() => setSelectedTech(null)}
                className="absolute top-8 right-8 p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white z-20 transition-all active:scale-90"
              >
                <X size={28} />
              </button>

              <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
                <div className="md:w-1/2 relative h-[450px] md:h-auto">
                  <img src={selectedTech.imageUrl} className="w-full h-full object-cover" alt={selectedTech.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent md:hidden"></div>
                  <div className="absolute bottom-8 left-8 md:hidden">
                      <h2 className="text-4xl font-black text-white">{selectedTech.name} 기술자</h2>
                  </div>
                </div>
                <div className="md:w-1/2 p-12 overflow-y-auto bg-white">
                  <div className="hidden md:block mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs flex items-center gap-1.5 font-black text-green-600 bg-green-50 px-4 py-1.5 rounded-full border border-green-100">
                        <ShieldCheck size={16} /> 수리톡톡 안심인증 전문가
                      </span>
                    </div>
                    <h2 className="text-5xl font-black text-slate-900 tracking-tighter">{selectedTech.name} 기술자</h2>
                  </div>
                  
                  <div className="flex items-center text-slate-400 font-bold text-lg mb-10">
                    <MapPin size={22} className="mr-2" /> {selectedTech.location} · 경력 {selectedTech.experience}
                  </div>

                  {/* 검증 통계 영역 */}
                  <div className="grid grid-cols-1 gap-4 mb-10">
                    <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 bg-white rounded-2xl text-blue-600 shadow-sm border border-slate-50">
                            <ClipboardCheck size={24} />
                          </div>
                          <span className="font-bold text-slate-500 text-lg">마지막 검증일</span>
                        </div>
                        <span className="font-black text-slate-900 text-xl">{selectedTech.lastVerifiedDate}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 bg-white rounded-2xl text-blue-600 shadow-sm border border-slate-50">
                            <History size={24} />
                          </div>
                          <span className="font-bold text-slate-500 text-lg">함께한 수리 건수</span>
                        </div>
                        <span className="font-black text-slate-900 text-xl">{selectedTech.repairCount.toLocaleString()}건</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 bg-white rounded-2xl text-blue-600 shadow-sm border border-slate-50">
                            <Calendar size={24} />
                          </div>
                          <span className="font-bold text-slate-500 text-lg">서비스 시작일</span>
                        </div>
                        <span className="font-black text-slate-900 text-xl">{selectedTech.startDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h4 className="text-xl font-black mb-4 text-slate-900">전문가 상세 소개</h4>
                    <p className="text-slate-600 leading-relaxed font-medium text-lg">
                      {selectedTech.description}
                    </p>
                  </div>

                  <div className="flex gap-4 sticky bottom-0 bg-white pt-6">
                    <a 
                      href="tel:1551-7784"
                      style={{ backgroundColor: brandColor }}
                      className="flex-1 text-white font-black py-6 rounded-[1.5rem] flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-[#0088ff]/30 active:scale-95"
                    >
                      <Phone size={24} fill="currentColor" /> 전문가에게 지금 전화하기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-600 py-24">
          <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
              <div>
                <div className="flex items-center justify-center md:justify-start gap-2 text-white mb-6">
                  <img src={logo} alt="설명 텍스트" className="h-6 w-auto"></img>
                  <span className="text-3xl font-black tracking-tighter">수리톡톡</span>
                </div>
              </div>
            </div>
            <div className="pt-10 border-t border-slate-800 text-sm font-bold flex flex-col md:flex-row justify-between gap-6">
              <p>© 2025 SuriTokTok Inc. All rights reserved.</p>
              <div className="flex items-center justify-center gap-8">
                <span className="text-slate-400">대표전화: 1551-7784</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  };

export default App
