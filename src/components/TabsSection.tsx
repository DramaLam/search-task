import Button from './Button/Button'

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: '1rem' }}>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>
        Главная
      </Button>
      <Button
        isActive={active === 'feedback'}
        onClick={() => onChange('feedback')}
      >
        Список из стороннего ресурса
      </Button>
    </section>
  )
}