'use client';

import Link from 'next/link';

export default function TranslatorPage() {
  return (
    <main
      style={{
        padding: '40px 24px',
        maxWidth: '1000px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '32px',
          borderRadius: '16px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          marginBottom: '24px',
        }}
      >
        <div style={{ marginBottom: '24px' }}>
          <Link
            href="/"
            style={{
              color: '#6366f1',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: '500',
            }}
          >
            ← Назад к главной
          </Link>
        </div>

        <h1
          style={{
            color: '#1e293b',
            marginBottom: '8px',
            fontSize: '2rem',
            fontWeight: '700',
          }}
        >
          🌐 Translator Module
        </h1>

        <p
          style={{
            color: '#64748b',
            marginBottom: '32px',
            fontSize: '1.1rem',
          }}
        >
          Каркас готов для подключения компонентов переводчика через адаптеры.
        </p>

        <div
          style={{
            background: '#fef3c7',
            border: '1px solid #fcd34d',
            borderRadius: '12px',
            padding: '20px',
          }}
        >
          <h3 style={{ color: '#92400e', marginBottom: '12px' }}>
            📋 Следующие шаги:
          </h3>
          <ol style={{ color: '#92400e', paddingLeft: '20px' }}>
            <li>
              Создать адаптер в <code>components/legacy/translator/</code>
            </li>
            <li>Перенести один компонент из старого проекта</li>
            <li>Добавить типы TypeScript</li>
            <li>Подключить к этой странице</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
