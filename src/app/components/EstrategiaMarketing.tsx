import { useState } from "react";
import "../estrategia.css";

export function EstrategiaMarketing() {
  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedArea = e.currentTarget;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (loadEvent) => {
          if (loadEvent.target?.result) {
            const iphoneScreen = clickedArea.querySelector('.estrategia-iphone-screen');
            if (iphoneScreen) {
              iphoneScreen.innerHTML = `<img src="${loadEvent.target.result}" alt="Imagem carregada" style="width: 100%; height: 100%; object-fit: cover; cursor: pointer;" />`;
            } else {
              clickedArea.innerHTML = `<img src="${loadEvent.target.result}" alt="Imagem carregada" style="width: 100%; height: 100%; object-fit: cover; cursor: pointer;" />`;
            }
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleVideoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const clickedArea = e.currentTarget;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";
    input.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (loadEvent) => {
          if (loadEvent.target?.result) {
            const iphoneScreen = clickedArea.querySelector('.estrategia-iphone-screen');
            if (iphoneScreen) {
              iphoneScreen.innerHTML = `<video controls style="width: 100%; height: 100%; object-fit: cover;"><source src="${loadEvent.target.result}" type="${file.type}">Seu navegador não suporta vídeo.</video>`;
            } else {
              clickedArea.innerHTML = `<video controls style="width: 100%; height: 100%; object-fit: cover;"><source src="${loadEvent.target.result}" type="${file.type}">Seu navegador não suporta vídeo.</video>`;
            }
          }
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };
  return (
    <div className="estrategia-page">
      <header className="estrategia-header">
        <div className="estrategia-nav">
          <a href="#home" className="estrategia-back">← Voltar ao Site</a>
          <h1 className="estrategia-logo">Raquel Sacramento</h1>
        </div>
      </header>

      <main className="estrategia-main">
        <div className="estrategia-container">
          <h1 className="estrategia-title">Estratégia de Marketing</h1>

          {/* Google Marketing */}
          <section className="estrategia-section">
            <h2 className="estrategia-section-title">Google Marketing</h2>

            <div className="estrategia-content-block">
              <h3 className="estrategia-subtitle">Campanha 1</h3>
              <div className="estrategia-layout-horizontal">
                <div className="estrategia-text-area" contentEditable suppressContentEditableWarning>
                  Clique aqui para editar e adicionar texto...
                </div>
                <div className="estrategia-image-area" onClick={handleImageClick}>
                  <div className="estrategia-iphone-mockup">
                    <div className="estrategia-iphone">
                      <div className="estrategia-iphone-notch"></div>
                      <div className="estrategia-iphone-screen">
                        <div className="estrategia-image-placeholder">
                          <span>📷</span>
                          <p>Clique para adicionar imagem</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="estrategia-content-block">
              <h3 className="estrategia-subtitle">Campanha 2</h3>
              <div className="estrategia-layout-horizontal">
                <div className="estrategia-text-area" contentEditable suppressContentEditableWarning>
                  Clique aqui para editar e adicionar texto...
                </div>
                <div className="estrategia-image-area" onClick={handleImageClick}>
                  <div className="estrategia-iphone-mockup">
                    <div className="estrategia-iphone">
                      <div className="estrategia-iphone-notch"></div>
                      <div className="estrategia-iphone-screen">
                        <div className="estrategia-image-placeholder">
                          <span>📷</span>
                          <p>Clique para adicionar imagem</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Marketing de Conteúdo */}
          <section className="estrategia-section">
            <h2 className="estrategia-section-title">Marketing de Conteúdo</h2>

            <div className="estrategia-content-block">
              <h3 className="estrategia-subtitle">Estratégia de Conteúdo</h3>

              <div className="estrategia-layout-horizontal">
                <div className="estrategia-text-area" contentEditable suppressContentEditableWarning>
                  Clique aqui para editar e adicionar texto...
                </div>
                <div className="estrategia-media-column">
                  <div className="estrategia-video-area" onClick={handleVideoClick}>
                    <div className="estrategia-iphone-mockup">
                      <div className="estrategia-iphone">
                        <div className="estrategia-iphone-notch"></div>
                        <div className="estrategia-iphone-screen">
                          <div className="estrategia-video-placeholder">
                            <span>🎥</span>
                            <p>Clique para adicionar vídeo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="estrategia-image-area" onClick={handleImageClick}>
                    <div className="estrategia-iphone-mockup">
                      <div className="estrategia-iphone">
                        <div className="estrategia-iphone-notch"></div>
                        <div className="estrategia-iphone-screen">
                          <div className="estrategia-image-placeholder">
                            <span>📷</span>
                            <p>Clique para adicionar imagem</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile Marketing */}
          <section className="estrategia-section">
            <h2 className="estrategia-section-title">Mobile Marketing</h2>

            <div className="estrategia-content-block">
              <h3 className="estrategia-subtitle">Estratégia Mobile</h3>
              <div className="estrategia-layout-horizontal">
                <div className="estrategia-text-area" contentEditable suppressContentEditableWarning>
                  Clique aqui para editar e adicionar texto...
                </div>
                <div className="estrategia-iphone-mockup">
                  <div className="estrategia-iphone">
                    <div className="estrategia-iphone-notch"></div>
                    <div className="estrategia-iphone-screen">
                      <div className="estrategia-sms-header">
                        <span className="estrategia-sms-time">9:41</span>
                        <span className="estrategia-sms-title">Raquel Sacramento Estética</span>
                      </div>
                      <div className="estrategia-sms-content">
                        <div className="estrategia-sms-bubble">
                          <p>O frio chegou e as suas unhas pedem renovação. Cuide das suas mãos. Marque já a tua sessão de beleza através do link.</p>
                          <a href="https://raquel-sacramento-navy.vercel.app/#contacto" className="estrategia-sms-link">
                            raquel-sacramento-navy.vercel.app/#contacto
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
