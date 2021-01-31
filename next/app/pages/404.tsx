import Link from "next/link";
import {MainLayout} from "../components/MainLayout";
import classes from '../styles/error.module.scss'

export default function ErrorPage() {
  return (
    <MainLayout>
      <h1 className={classes.error}>404 page</h1>
      <p><Link href={'/'}><a>go back</a></Link></p>
    </MainLayout>
  )
}