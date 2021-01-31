import { NavLink } from 'react-router-dom';
import Section from '../Layout/Section';
import Container from '../Layout/Container';
import s from './HomeView.module.css';

export default function HomeView() {
  return (
    <Container>
      <Section className={s.section}>
        <div className={s.wrapper}>
          <h1 className={s.title}>Welcome!</h1>
          <NavLink className={s.link} to="/register"></NavLink>

          <p className={s.description}>
            This is an application for recording and storing the phone numbers
            of your friends and acquaintances
          </p>
        </div>
      </Section>
    </Container>
  );
}
