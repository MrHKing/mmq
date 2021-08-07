/*
 * Copyright 2021-2021 Monkey Group.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.monkey.mmq.core.tls;

import javax.net.ssl.SSLContext;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;

/**
 * Utils for build {@link SSLContext}.
 *
 * <p>Currently only supports client-side
 *
 * <h3>Making your client support TLS without authentication</h3>
 * <pre>
 * System.setProperty({@link TlsSystemConfig#TLS_ENABLE}, "true");
 * </pre>
 *
 * <h3>Making your client support TLS one-way authentication</h3>
 *
 * <pre>
 * System.setProperty({@link TlsSystemConfig#TLS_ENABLE}, "true");
 * System.setProperty({@link TlsSystemConfig#CLIENT_AUTH}, "true");
 * System.setProperty({@link TlsSystemConfig#CLIENT_TRUST_CERT}, "trustCert");
 * </pre>
 *
 * @author solley
 */
public final class TlsHelper {
    
    /**
     * Returns a {@link org.apache.http.ssl.SSLContexts}.
     *
     * <p>For example</p>
     * <code>HttpsURLConnection.setDefaultSSLSocketFactory(TlsHelper.buildSslContext(true).getSocketFactory());</code>
     *
     * @param forClient whether for client
     * @return {@link SSLContext}
     * @throws NoSuchAlgorithmException Not support the specified algorithm
     * @throws KeyManagementException   KeyManagement exception
     */
    public static SSLContext buildSslContext(boolean forClient)
            throws NoSuchAlgorithmException, KeyManagementException {
        
        SSLContext sslcontext = SSLContext.getInstance("TLS");
        sslcontext.init(null, SelfTrustManager
                        .trustManager(TlsSystemConfig.tlsClientAuthServer, TlsSystemConfig.tlsClientTrustCertPath),
                new java.security.SecureRandom());
        return sslcontext;
    }
}
