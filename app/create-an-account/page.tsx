import ButtonLink from "../../components/button-link";

export default function CreateAnAccount() {
    return (
        <>
            <h1 className="text-4xl my-4">Create an account</h1>

            <form className="mt-8">
                <div className="mb-4">
                    <label className="block">
                        Username:
                    </label>
                    <input className="rounded-sm border-gray-300 border-2" type="text" required autoFocus />
                </div>

                <div className="my-4">
                    <label className="block">
                        Email:
                    </label>
                    <input className="rounded-sm border-gray-300 border-2" type="text" required />
                </div>

                <div className="my-4">
                    <label className="block">
                        Password:
                    </label>
                    <input className="rounded-sm border-gray-300 border-2" type="password" required />
                </div>
                <ButtonLink href="/feed">
                    Sign Up
                </ButtonLink>
                </form>
        </>
    )
}
